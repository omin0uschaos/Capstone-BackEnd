import jwt from 'jsonwebtoken';

export const checkToken = (req, res, next) => {

    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Authorization token is required' });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next(); 
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export const checkAdminToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Authorization token is required' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (!decoded.isAdmin) {
        return res.status(403).json({ message: 'Admin access required' });
      }

      req.user = decoded;
      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: 'Invalid token' });
    }
};
