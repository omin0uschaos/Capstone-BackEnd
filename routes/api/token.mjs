import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/validate', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {

      return res.status(401).json({ message: 'Token is invalid' });
    }

    res.json({ message: 'Token is valid', userId: decoded.id });
  });
});

export default router;
