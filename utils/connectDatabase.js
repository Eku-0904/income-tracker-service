const mongoose = require('mongoose')

const connectDatabase = async () => {
    res = await mongoose.connect("mongodb+srv://eku:Ochenko1223@cluster0.ujt2jdx.mongodb.net/?retryWrites=true&w=majority")
    if (res) console.log('DB connected')
}

module.exports = connectDatabase