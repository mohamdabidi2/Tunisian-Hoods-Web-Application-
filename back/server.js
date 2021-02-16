require('dotenv').config()
const express = require('express')

const cors = require('cors')
const path = require('path')

const BodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT

mongoose.connect(process.env.MONGO_DB_URI, {useNewUrlParser: true,useUnifiedTopology: true},
    
  () => console.log('DB connected...')
  
)

const log=console.log
const app = express()

app.use(cors())
app.use(BodyParser.json())
app.use(express.static(path.join(__dirname,"./build")))
app.post('/',function(req,res){
  res.sendFile(path.join(__dirname,"build",'index.html'))
  .then()
  .catch(res.redirect('/'))
})


// Routes
app.use('/user', require('./Routes/auth'));
app.use('/dashboard', require('./Routes/dashboard'));
app.use('/admindashboard', require('./Routes/Admin'));







app.use(function(req, res) {
   res.sendFile(path.join(__dirname,"./build",'index.html'))

});


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./build'));
}



app.listen(port, () => console.log("Server Running..."))




