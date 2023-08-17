const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const secret = 'figaro321';
const app = express();

const salt = bcrypt.genSaltSync(10);
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());


mongoose.connect('mongodb+srv://blog:<my-password>@cluster0.zfh33ol.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req,res) => {
       const {username,password} = req.body;
       try{
         const userDoc = await User.create({
           username,
           password:bcrypt.hashSync(password,salt),
         });
         res.json(userDoc);
       } catch(e) {
         console.log(e);
         res.status(400).json(e);
       }
     });
     
app.post('/login', async (req, res) => {
       const { username, password } = req.body;
       const userDoc = await User.findOne({ username });
       const passwordCorrect = bcrypt.compareSync(password, userDoc.password);
       if (passwordCorrect) {
              jwt.sign({ username, id: userDoc._id },secret, {}, (err,token) =>{
                     if(err) throw err;
                     res.cookie('token',token).json('ok');
              })
       } else {
              res.status(400).json('Wrong credentials!')
       }
       res.json(userDoc)
});
app.listen(4000)