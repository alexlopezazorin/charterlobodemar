import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { nombre, email, mensaje } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    await transporter.sendMail({
        from: `"Charter Lobo de Mar" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_TO,
        subject: `Nueva consulta de ${nombre}`,
        html: `
            <h2>Nueva consulta desde la web</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${mensaje}</p>
        `,
    });

    return NextResponse.json({ ok: true });
}
