import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
dotenv.config()
import cors from "cors"
import userRouter from "./routes/user.routes.js"
import messageRouter from "./routes/message.routes.js"
import { app, server } from "./socket/socket.js"

const port = process.env.PORT || 5000

app.use(cors({
    origin: "https://chat-app-frontend-8hyw.onrender.com",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/message", messageRouter)

// Connect to DB first, then start server
connectDb()
  .then(() => {
    server.listen(port, () => {
      console.log("server started")
    })
  })
  .catch((err) => {
    console.error("DB connection error:", err.message)
    process.exit(1) // stop the app if DB fails
  })
