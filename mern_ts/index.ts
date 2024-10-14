import express, { Request, Response } from 'express';
import nodemailer, { createTransport } from 'nodemailer'
import cors from 'cors';
const app = express();
const port = 5000;


app.use(express.json());
app.use(cors({
  origin:"http://localhost:3000",
  methods:['GET','POST']
}))


app.get('/',(rq:Request,rs:Response) =>{
    rs.send({
        message:"hare krishna",

    })
})

app.post('/send-mail',async (rq:Request,rs:Response)=>{
  const{to,subject,text} = rq.body;

  // if (!to || !subject || !text) {
  //   return rs.status(400).json({12
  //     message:"missing required field"
  //   })
  // }

  try {
    
    const transporter =  nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'marietta.keeling53@ethereal.email',
          pass: '7QDyc97WTJmXyZv2P9'
      }
  })

    const info = await transporter.sendMail({
      from:"marietta.keeling53@ethereal.email",
      to,
      text,
      subject
    })

    rs.status(200).json({
      message:"mail send successfully",
      info
    })
  } catch (error) {
    rs.status(500).send({
      message:"error in mail sending",
      error
    })
    console.log(error);
    
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
