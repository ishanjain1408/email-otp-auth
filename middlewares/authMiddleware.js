const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'secret';


exports.protect = (req, res, next) => {
const authHeader = req.headers.authorization;
if (!authHeader || !authHeader.startsWith('Bearer ')) {
return res.status(401).json({ message: 'Not authorized' });
}
const token = authHeader.split(' ')[1];
try {
const decoded = jwt.verify(token, JWT_SECRET);
req.user = decoded; // { id, email }
next();
} catch (err) {
return res.status(401).json({ message: 'Invalid token' });
}
};