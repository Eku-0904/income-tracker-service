const express = require('express')
const parser = require('body-parser')
const connect = require("./utils/connectDatabase")
const cors = require('cors');
const router = require('./routes/userRoutes');


const port = 999
const app = express()
app.use(express.json())
app.use(cors());
connect()
app.use(router)

app.listen(port, () => {
    console.log(`your backend server is running on ${port}`)
})

