const { model, Schema} = require('mongoose');

const UserSchema = new Schema({
    email: String,
    name: String,
    password: String,
    avatar_img: {type: String, default:""},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default:""},
    currency_type: {type: String, default:""},
})

const UserModel = model("User", UserSchema);

module.exports = UserModel;