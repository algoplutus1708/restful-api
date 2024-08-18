import {User} from "../models/user.model.js"
async function handleGetAllUsers(req,res){
    const allDbUsers = User.find({})
    return res.json(allDbUsers)
}

async function handleGetUserById(req,res) {
    const user=await User.findById(req.params.id)
    if(!user) return res.status(404).json({error:"User not found"})
    const k =`${user.firstName}`
    return res.send(k)
}

async function handleUpdateUserById(req,res) {
    const id = Number(req.params.id)
    const userIndex = users.findIndex((user)=> user.id===id)
    if(userIndex !== -1){
        const updatedUser = {...users[userIndex], ...req.body}
        users[userIndex] = updatedUser
        fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
            return res.json({status:"Success", user: updatedUser})
        })
    } else {
        return res.json({status:"Error", message: "User not found"})
    }
}

async function handleDeleteUserById(req,res) {
    return res.json({status:"pending"})
}

async function handleCreateNewUserByID(req,res) {
    const body= req.body;// Whenever we send any request from frontend, we have to use req.body to access it.
    //console.log("Body",body)// Alert - When we will not use Middleware. Whenever we will do only this, it will show undefined. So we have to use a middleware.
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg:"All fields are required"})
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    })
    return res.status(201).json({msg: "Created"})
}
export {handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUserByID}