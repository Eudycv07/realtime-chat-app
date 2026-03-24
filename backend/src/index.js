import express from "express"
import authRoutes from "./routes/auth.route.js"
import { connectDB, ENV } from "./lib/index.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app =  express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true 
}));

app.use("/api/auth", authRoutes);
import router from "./routes/index.js"

app.use(express.json())
app.use(cookieParser())

app.use("/api/", router)

app.listen(ENV.PORT,()=>{
    console.log(`sever is running on port ${ENV.PORT}`)
    connectDB()
});