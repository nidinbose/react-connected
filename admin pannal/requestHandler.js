
import userSchema from "./models/user.model.js"
import bcrypt from 'bcrypt'
import pkg from 'jsonwebtoken'
import Auth from "./middleware/auth.js";
const {sign} = pkg







export async function userRegister(req,res) {

    const {email,password,cpassword}=req.body
console.log(password);
    if(!(email&&password&&cpassword))
        return res.status(404).send("fields are empty")

    if(password!==cpassword)
        return res.status(404).send("password not matched")

bcrypt.hash(password,10).then(async(hpassword)=>{
    userSchema.create({email,password:hpassword}).then(()=>{
        return res.status(201).send({msg:"successfully created"})

    })
    .catch((error)=>{
        return res.status(400).send({error:error})
    })
}).catch((error)=>{
    res.status(400).send({error:error})
})
    
}




export async function userLogin(req,res){
    try {
        const {email, password}=req.body;
        const user=await userSchema.findOne({email})
        if(user == null)return res.status(404).send({msg:"user not found"})
            const id = user._id
        const success= await bcrypt.compare(password,user.password);
        if(success!==true) return res.status(400).send({msg:"password not matched"})
            const token=await sign ({id,email},process.env.JWT_KEY,{expiresIn:"24h"})
        return res.status(200).send({token})
    } catch (error) {
        res.status(400).send({error:error})
    }
}






export async function Home(req,res){
    const {id,email}=req.user
    console.log(req.user);
    res.status(200).send({email})
}