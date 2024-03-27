import express from 'express';
import Users from '../../models/userSchema.mjs';
import Military from '../../models/militarySchema.mjs';
import Department from '../../models/departmentSchema.mjs';
import Rank from '../../models/rankSchema.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { checkToken, checkAdminToken } from '../../middleware/auth.mjs';
import { users } from '../../utilities/sampleUsers.mjs';
import { military } from '../../utilities/sampleMilitary.mjs';
import { departments } from '../../utilities/sampleDepartment.mjs';
import { ranks } from '../../utilities/sampleRank.mjs';
const router = express.Router();
import dotenv from 'dotenv';
dotenv.config();


const baseURL = process.env.BASE_URL;

router.get('/', checkToken, async (req, res) => {
    try {
        const allUsers = await Users.find({});
        res.send(allUsers);
    } catch (error) {
        console.error(error);
    }
})

router.get('/seed', async (req, res)=>{
    await Users.deleteMany({});
    await Military.deleteMany({});
    await Department.deleteMany({});
    await Rank.deleteMany({});

    await Users.create(users);
    await Military.create(military);
    await Department.create(departments);
    await Rank.create(ranks);
    res.send('Users, Military, Department and Rank Database Seeded');
})

router.get('/portrait/:username', async (req, res) => {
    const { username } = req.params;
    try {
        const user = await Users.findOne({ username: username });
        if (!user) {
            return res.status(404).send("User not found")
        }

        const url = `${baseURL}/${user.portrait}`;
        res.send(url);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await Users.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ message: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const payload = {
            id: user._id,
            username: user.username,
            isAdmin: user.isAdmin
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: "Login successful", token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


router.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await Users.findById(userId).select('-password');
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});


router.get('/userinfo/:username', checkToken, async (req, res) => {
    const { username } = req.params;
    try {
        const user = await Users.findOne({ username }).select('-password');
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});



router.patch('/user/update/:userId', checkAdminToken, async (req, res) => {
    const { userId } = req.params;
    const updateData = req.body;

    if (updateData.password) {
        const salt = await bcrypt.genSalt(10);
        updateData.password = await bcrypt.hash(updateData.password, salt);
    }

    try {
        const updatedUser = await Users.findByIdAndUpdate(userId, updateData, { new: true }).select('-password');
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.patch('/user/task/update/:userId/:taskId', checkToken, async (req, res) => {
    const { userId, taskId } = req.params;
    const updateData = req.body;
  
    try {
      const user = await Users.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const taskIndex = user.taskList.findIndex(task => task._id.toString() === taskId);
      if (taskIndex === -1) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      user.taskList[taskIndex] = { ...user.taskList[taskIndex], ...updateData };
  
      const updatedUser = await user.save();
  
      res.json({ message: "Task updated successfully", user: updatedUser.select('-password') });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
  router.post('/user/task/add/:userId', checkToken, async (req, res) => {
    const { userId } = req.params;
    const newTask = req.body;
  
    try {
      const user = await Users.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      user.taskList.push(newTask);
  
      const updatedUser = await user.save();
  
      res.json({ message: "Task added successfully", user: updatedUser.select('-password') });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
  router.delete('/user/task/delete/:userId/:taskId', checkToken, async (req, res) => {
    const { userId, taskId } = req.params;
  
    try {
      const user = await Users.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const taskIndex = user.taskList.findIndex(task => task._id.toString() === taskId);
      if (taskIndex === -1) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      user.taskList.splice(taskIndex, 1);
  
      const updatedUser = await user.save();
  
      res.json({ message: "Task deleted successfully", user: updatedUser.select('-password') });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  

router.delete('/user/delete/:userId',checkAdminToken, async (req, res) => {
    const { userId } = req.params;
    try {
        const deletedUser = await Users.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



export default router;