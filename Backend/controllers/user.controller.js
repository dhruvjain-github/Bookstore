import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Validate the password input
        if (typeof password !== 'string') {
            return res.status(400).json({ message: "Password must be a string" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Debugging: Log the password before hashing
        console.log("Password before hashing:", password);

        // Hash the password with bcryptjs
        const hashedPass = await bcryptjs.hash(password, 10);

        // Debugging: Log the hashed password
        console.log("Hashed Password:", hashedPass);

        const newUser = new User({
            fullname,
            email,
            password: hashedPass
        });

        await newUser.save();

        res.status(201).json({ message: "User created successfully" , user:{
            _id:newUser._id,
            fullname:newUser.fullname,
            email:newUser.email,
        }});
    } catch (error) {
        console.error("Error:", error.message); 
        console.error("Stack Trace:", error.stack); 
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const login= async (req,res)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email})
        const isMatched=await bcryptjs.compare(password,user.password)

        if(!user || !isMatched)
        {
            return res.status(400).json({message:"Invalid email or password"})
        }
        else
        {
            res.status(200).json({
                message:"User loged in Successfully",
                user:{
                    _id:user._id,
                    fullname:user.fullname,
                    email:user.email,
                }
            })
        }
    } catch (error) {
        console.error("Error:", error.message); 
        console.error("Stack Trace:", error.stack); 
        res.status(500).json({ message: "Internal Server Error" });
    }
}