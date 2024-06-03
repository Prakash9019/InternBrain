const connectDB = require('./db');
const express = require('express');
const nodemailer = require("nodemailer");
var cors=require('cors');
const app = express();
const PORT=3000;
connectDB();
app.use(cors());
app.use(express.json());


app.use('/api/auth',require('./routers/auth.js'));
app.use('/api/notes',require('./routers/notes'));

  
app.get('/',(req,res)=>{
    res.json("hello");
})
app.get('/mail',async (req,res)=>{
    const email = req.body.email;
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'may.hartmann@ethereal.email',
        pass: 'dGU5xhDzD4QQGtGUzK'
    }
});
const info = await transporter.sendMail({
    from: '"Hr BrainOp" <BrainOp12@gmail.com>', // sender address
    to: email,
    subject: "Welcome to the BrainOp", // Subject line
    text: "Have a nice day! keep using it....", // plain text body
    html: "<b>Have a nice day! keep using it....</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);
   res.json(info);
})

app.listen(PORT, () => {
    console.log(`Todolist listening at http://localhost:${PORT}`);
})
