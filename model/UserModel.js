
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


const TransactSchema = new mongoose.Schema({
    Transaction: {type: String, require}, //("income/expense")

    Amount: {type: Number, require},

    Category: {type: String, require},

    Date: {type: String, require},

    User: {type: String, require},

    Description: {type: String, require},

    balance: {type: Number, default: 0}
}, {timestamps: true})

const Transactions = new mongoose.model("Transact", TransactSchema)



module.exports = Transactions