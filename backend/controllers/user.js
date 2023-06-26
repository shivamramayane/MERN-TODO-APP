 import User from "../models/User.js"
 export const getUserInfo= async(req,res)=>{
  try{
    const data = await User.findById(req.user.id).select('name email');
    return res.status(200).json(data)
  }catch(err){
return res.json(err)
  }
 }

 export const updateUser = async(req,res)=>{
try {
    const updateduser= await User.findByIdAndUpdate(req.user.id,{
        name:req.body.name,
        email:req.body.email
    },{
        new:true
    }).select('name email')
    return res.status(200).json(updateduser)
} catch (error) {
    return res.json(error)
}
 }