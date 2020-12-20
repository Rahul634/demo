
const express = require('express');
const app = express();
const connectDB = require('./DBconnect/connect');
const User = require('./DBconnect/User');
connectDB()

const Port = process.env.Port || 3000;

app.use(express.urlencoded({
    extended: true
  }))

  app.get('/', function(req, res){  
    
//res.sendFile('public/index1.html' , { root : __dirname});
    res.sendFile('./forms/input.html', { root : __dirname});
}); 
app.post('/', async (req, res) => {
    const {username, email, feedback} = req.body;
    let user = {};
    user.username = req.body.username
    user.email = req.body.email
    user.feedback = req.body.feedback
    let usermodel = new User(user);
    await usermodel.save();

    console.log(username)
    console.log(email)
    console.log(feedback)
    res.end()
  })

  app.get('/username', function(req, res){  
    
    //res.sendFile('public/index1.html' , { root : __dirname});
        res.sendFile('./forms/username.html', { root : __dirname});
    }); 

    app.post('/info', async (req, res) => {
        const {username} = req.body;
        let answer= await User.findOne({username : username}).exec();
    
        res.json(answer)
      })
  

  

app.listen(Port,()=> console.log("listening on port 3000"));
