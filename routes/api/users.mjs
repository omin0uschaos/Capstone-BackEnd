import express from 'express';
import Users from '../../models/userSchema.mjs';
import Military from '../../models/militarySchema.mjs';
import Department from '../../models/departmentSchema.mjs';
import Rank from '../../models/rankSchema.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { checkToken } from '../../middleware/auth.mjs';
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
        // Find the user by username
        const user = await Users.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ message: "Invalid credentials" });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // If password matches, generate and return a JWT
        const payload = { id: user._id, username: user.username };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: "Login successful", token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;