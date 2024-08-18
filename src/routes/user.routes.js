import express from "express"
import {Router} from "express"
import {handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUserByID} from "../controller/user.controller.js"

const router = Router()
//For /users - for webpages
// router.get("/users", async (req,res)=>{
//     const allDbUsers = await User.find({})
//     const html=`
//         <ul>
//             ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
//         </ul>
//     `
//     res.send(html)
// })

router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUserByID)


router.route("/:id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)



export default router