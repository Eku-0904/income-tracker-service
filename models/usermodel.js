const { model, Schema} = require('mongoose');

const UserSchema = new Schema({
    id: String,
    email: String,
    name: String,
    password: String,
    avatar_img: String,
    createdAt: {type: Date, default: Date.now()},
    updatedAt: Date,
    currency_type: String,
})

const UserModel = model("User", UserSchema);

module.exports = UserModel;