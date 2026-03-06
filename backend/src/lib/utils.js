import jwt from "jsonwebtoken"
import { ENV } from "./index.js"

const generateToken = (userId,res)=>{
    const token = jwt.sign({userId}, ENV.JWT_SECRET,{
        expiresIn:"7d"
    })
    res.cookie("jwt",token,{
        maxAge: 7 * 24 * 60 * 60 * 1000, //MS
        httpOnly:true, //prevent XSS attactks cross-site scripting attacks
        sameSite: "strict", // CSFR attacks cross-site request forgery attacks
        secure: ENV.NODE_ENV !== "development"
    })

    return token;
}

export {
    generateToken
}