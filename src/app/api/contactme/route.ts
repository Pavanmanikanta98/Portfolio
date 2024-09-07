
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { log } from "console";
dotenv.config();

export async function POST(request : NextRequest){
    
    const data = await request.json();
    try {

        // log(process.env.user )

     const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            service :"gmail",

            auth:{
                user: process.env.user,
                pass: process.env.password
            }
        })

        const info = await transporter.sendMail({
            from: ` "${data.name}"`,
            to: 'pavanmanikanta45@gmail.com',
            subject: 'New Contact Request',
            text: "...",
            html:`
              
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border: 2px solid #00474f;
            border-radius: 10px;
        }
      
        p {
            font-size: 20px;
            line-height: 1.5;
            margin-bottom: 10px;
            border: 2px solid #00474f;
            border-radius: 50px 20px;
            background-color: #00474f;
            color: white;
            padding: 5px;
            text-align: center;
            font-weight: 900;
        }
        ul { 
            list-style-type: none;
            padding: 0;
        }
        li {
            margin-bottom: 5px;
        }
        .signature {
            font-style: italic;
            font-size: 14px;
        }
      </style>
</head>
<body>
    <div class="email-container">

        <p>Pavan's Portfilio</p>
        <ul>
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Phone:</strong> ${data.phoneNumber}</li>
            <li><strong>Subject:</strong> ${data.subject}</li>
            <li><strong>Message:</strong><br>${data.message}</li>
        </ul>
    </div>

</body>
</html>

            `
        })
        if(info.messageId){
            return NextResponse.json({error:false, message:'message Successfully sent! Thank You for contacting Pavan'})
        }
        return NextResponse.json({error:true, message:'something went wrong ! '})

        
    } catch (er) {
        console.log(er);
        return NextResponse.json({error:true, message:'something went wrong! '+er});
    }
}