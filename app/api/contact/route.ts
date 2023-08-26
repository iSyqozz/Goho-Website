import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer';
import { receiver } from '@constants';

async function sendMail(subject:string, toEmail:string, message:string, sender:string) {
    const formattedText = `Name: ${subject}\n\nSenderEmail: ${sender}\n\ncontent: ${message}` 
    
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        },
    });
    var mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: toEmail,
        subject: subject,
        text: formattedText,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
        } else {
            console.log("Email Sent");
            return true;
        }
    });
}



export async function POST(req: Request) {

    const data = await req.json()
    const { name, email, message } = data;

    console.log(name, email, message)

    if (!name || !email || !message) {
        return NextResponse.json('Unauthorized')
    } else {
        sendMail(name,receiver,message,email)
        return NextResponse.json('sucess')
    }
}
