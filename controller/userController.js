const UserModel = require('../models/usermodel')
const bcrypt = require("bcrypt")

const createUser = async (req, res) => {
    const body = req.body;
    console.log(body)
    const password = body.password
    console.log(password)
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data = { ...body, password: hashedPassword };
    console.log(data)

    try {
        const user = await UserModel.create(data)
        res.status(200).send(user._id)
    } catch (err) {
        res.status(500).send("internal error")
    }

};

// const loginUser = async (req, res) => {
//     const body = req.body
//     const user = await UserModel.findOne({ email: body.email })
//     if (user) {
//         res.status(200).send(user)
//     } else {
//         res.status(404).send("Not Found")
//     }
// }
const loginUser = async (req, res) => {
    const body = req.body;
    const user = await UserModel.findOne({ email: body.email });

    if (user) {
        const userData = {
            _id: user._id,
            email: user.email, 
        };

        res.status(200).send(userData);
    } else {
        res.status(404).send("Not Found");
    }
};

module.exports = { createUser, loginUser }