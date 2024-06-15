
const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    firstName: {type: String, require},

    lastName: {type: String, require},

    phoneNumber: {type: String, require},

    location: {type: String},

    email: {type: String, require},

    password: {type: String, require},

    balance: {type: Number, default: 0}
}, {timestamps: true})

const Users = new mongoose.model("User", UserSchema)

module.exports = Users