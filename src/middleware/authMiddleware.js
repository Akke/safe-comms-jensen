const jwt = require("jsonwebtoken")

const requireAuth = (req, res, next) => {
	const authHeader = req.headers.authorization

	let token;

	if (authHeader && authHeader.startsWith("Bearer ")) {
		token = authHeader.split(" ")[1];
	} 
	else if (req.cookies && req.cookies.token) {
		token = req.cookies.token;
	}
	if (!token) {
		return res.status(401).json({ message: "Authorization token required." })
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		req.user = decoded
		next()
	}
	catch (error) {
		console.error(error)
		res.status(401).json({ message: "Invalid or expired token." })
	}
};

module.exports = { requireAuth }

