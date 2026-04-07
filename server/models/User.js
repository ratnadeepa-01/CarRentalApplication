import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email : {type: String, required: true, unique: true},
    password : {type: String, required: true},
    role : {type: String, enum: ['owner', 'user'], default: 'user'},
    gender : {type: String, enum: ['male', 'female'], default: 'male'},
    image : {type: String, default: ''},
},{timestamps: true})

const User = mongoose.model('User', userSchema)

export default User