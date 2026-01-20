import express from "express";
import dotenv from "dotenv";
import connectDb from "./configs/db.js";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import courseRouter from "./routes/courseRoute.js";
import paymentRouter from "./routes/paymentRoute.js";
import aiRouter from "./routes/aiRoute.js";
import reviewRouter from "./routes/reviewRoute.js";

// Load environment variables
dotenv.config();

// 🔍 ENV DEBUG (remove later)
console.log("🔍 ENV CHECK");
console.log("PORT:", process.env.PORT);
console.log("MONGODB_URL:", process.env.MONGODB_URL ? "✅ Loaded" : "❌ Missing");

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"https://lms-7cp5.onrender.com",
    credentials:true
}))
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/course", courseRouter)
app.use("/api/payment", paymentRouter)
app.use("/api/ai", aiRouter)
app.use("/api/review", reviewRouter)

// Routes
// app.use("/api/auth", authRouter);
// app.use("/api/user", userRouter);
// app.use("/api/course", courseRouter);
// app.use("/api/payment", paymentRouter);
// app.use("/api/ai", aiRouter);
// app.use("/api/review", reviewRouter);

// Test route
app.get("/", (req, res) => {
    res.send("Hello From Server");
});

// Start server
app.listen(port, () => {
    console.log(`🚀 Server Started on port ${port}`);
    connectDb();
});
