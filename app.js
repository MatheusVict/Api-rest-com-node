const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
app.use(express.json())
app.get('/', (req, res) =>{
    res.status(200).json({msg: "Tá on"})
})

const User = require('./models/User ')

app.post('/auth/regis', async(req, res) =>{
    const {name, email, password, confirm} = req.body

    if(!name){
        return res.status(422).json({msg: "Nome é obrigatorio pae"})
    }
    if(!email){
        return res.status(422).json({msg: "Email é obrigatorio pae"})
    }
    if(!password){
        return res.status(422).json({msg: "senha é obrigatorio pae"})
    }
    if(password !== confirm){
        req.msg({msg: "vai"})
    }
})

mongoose.connect('mongodb+srv://Matheus:familia26@cluster0.ncavyzf.mongodb.net/?retryWrites=true&w=majority').then(() =>{
    console.log('Conectado')
}).catch((err) =>{
    console.log('Erro: '+err)
})

const PORT = 5500
app.listen(PORT, () =>{
    console.log('Tá on no: http://localhost:5500/')
})