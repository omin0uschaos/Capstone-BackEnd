import jwt from 'jsonwebtoken';


export const checkToken = (req, res, next) => {
    // Extract the token from cookies
    const token = req.cookies.token; // Assuming the cookie's name is 'token'
    if (!token) {
        return res.status(401).json({ message: 'Authorization token is required' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Make sure this matches how you've structured your payload. Previously, it was decoded.user
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Invalid token' });
    }
};
