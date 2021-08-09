const express = require('express')
const app = express()
require('dotenv').config()
const { Base64 } = require('js-base64')
const expressUpload = require('express-fileupload')
const cors = require('cors')
const cloudinary = require('cloudinary').v2

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(expressUpload())

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
})

port = process.env.PORT || 5000

app.post('/upload', async(req, res) => {
    console.log(req.body)
    try {
        if (req.files) {
            const base64String = Base64.encode(req.files.image.data)
            const uploadResult = await cloudinary.uploader.upload(`data:${req.files.image.mimetype};base64,${base64String}`)
            .catch(err => {
                console.log(err)
            })
            console.log(uploadResult.url)
            return res.status(200).json({photoUrl: uploadResult.url, name: req.body.name, category: req.body.category, time: Date.now()})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Error"})
    }
})

app.listen(port, () => {
    console.log(`Server Started at Port ${port}`)
})