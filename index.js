const express=require("express");
const cors=require("cors");
const nodemailer=require("nodemailer");

const app=express();
app.use(cors());
app.use(express.json());

app.post("/sem",(req,res)=>{
    let data=[req.body.name,req.body.phone,req.body.query];
    console.log(data);

   let name=req.body.name;
   let txt ="Phone = " +req.body.phone + "  Query = "+req.body.query;
   
   let transporter =nodemailer.createTransport({
        service:"gmail",
         auth:{
            user:"anushka3204@gmail.com",
            pass:"rwwa igsy cnvx teod"
}
})

let mailOptions={
      from:"anushka3204@gmail.com",
      to:"anushka3204@gmail.com",
      subject:"Enquiry from "+name,
      text:txt
}

transporter.sendMail(mailOptions,(err,info)=>{
if (err){
      console.log("Mail err",err);
       res.status(500).json(err);
}

else{
  console.log("Mail send" ,info.response);
  res.status(200).json("mail send");
}
})

});

app.listen(9000,()=>{console.log("Ready @ 9000");});