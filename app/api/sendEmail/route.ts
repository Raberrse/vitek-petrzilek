import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      user_name,
      user_email,
      user_phone_number,
      user_company_name,
      user_message,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      name: process.env.SMTP_HOST, 
      host: process.env.SMTP_HOST, 
      port: 465,
      secure: true,
      auth: {
        user: process.env.SENDER_EMAIL, // username
        pass: process.env.SENDER_PASSWORD, // password
      },
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: 'vitek.petrzilek@gmail.com',
      subject: "Novej klient 💸💸",
      text: `
            Jméno: ${user_name}
            E-mail: ${user_email}
            Telefon: ${user_phone_number}
            Společnost: ${user_company_name !== '' ? user_company_name : '[Prázdné]'}
            Zpráva: ${user_message !== '' ? user_message : '[Prázdné]'}
        `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("E-mail sent:", info.response);
    return NextResponse.json({
      success: true,
      message: "OK",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Error",
    });
  }
}
