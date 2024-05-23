const express = require("express")
const app = express()

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");

const database = require("./config/database")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const {cloudinaryConnect} = require("./config/cloudinary")
const fileUpload = require("express-fileupload")
const dotenv  = require("dotenv")
dotenv.config()
const PORT = process.env.PORT||4000
database.connect();
 
// middlewares
app.use(express.json());
app.use(cookieParser())
app.use(
    cors({
        origin:"https://study-notionapp.vercel.app",credentials: true
    })
)

app.use(
    fileUpload({
        useTempFiles:true,tempFileDir:"/tmp"
    })
)
cloudinaryConnect()
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile",profileRoutes);
app.use("/api/v1/course",courseRoutes);
app.use("/api/v1/payment",paymentRoutes);

app.get("/",(req,res)=>{
    return res.json({
        success:true,message:"YOUR SERVER IS UP AND RUNNING"
    })
})
app.listen(PORT,()=>{
    console.log(`app is running at ${PORT}`)
})
