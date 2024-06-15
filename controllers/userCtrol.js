
const Users = require("../model/UserModel")

const handleAddUser = async (req, res)=>{

    const { firstName, lastName, phoneNumber, location, email, password } = req.body

    const newUser= new Users({firstName, lastName, phoneNumber, location, email, password})

    await newUser.save()
    return res.status(200).json({
        message: "Successful",
        user: newUser
    })
}




module.exports = {
    handleAddUser
}