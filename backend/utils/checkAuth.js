import jwt from 'jsonwebtoken'
// import error from './error.js';
 const checkAuth = (req,res,next)=>{
const token = req.cookies.access_token;
if(!token){
    return res.json(' no token  ')
}
return jwt.verify(token,"shivam",(err,decoded)=>{
    if(err){
        return res.json(" invalid token")
    }
    
        req.user=decoded;
        return next()
    
})
}
export default checkAuth;