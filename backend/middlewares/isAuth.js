import jwt from "jsonwebtoken"

const isAuth = (req, res, next) => {
  try {
    const token = req.cookies?.token

    // 1️⃣ No token → user not logged in
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized: token missing"
      })
    }

    // 2️⃣ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // 3️⃣ Attach user info
    req.userId = decoded.userId

    next()
  } catch (error) {
    // Token expired or invalid
    return res.status(401).json({
      message: "Unauthorized: invalid or expired token"
    })
  }
}

export default isAuth
