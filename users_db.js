//__________________________________________________
//connecting to MongoDB
const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.URI);
console.log("db connected")
//__________________________________________________
//adding something to DB:

//Schema:
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: {
        type: String, 
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now() 
    },
    updatedAt: {
        type: Date,
        default: () => Date.now() 
    }
})

//Model:
const User = mongoose.model("user", userSchema)

//__________________________________________________
//Adding new user

//adding new document
const testUser = new User({
    name: "testingenv",
    password: "miso051w",
    email: "misotest@email.com"
})

//saving new document
testUser.save();

//__________________________________________________
//Retrieving user:


//__________________________________________________