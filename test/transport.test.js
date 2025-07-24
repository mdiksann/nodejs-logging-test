import winston from "winston";
import TransportStream from "winston-transport";
import nodemailer from "nodemailer";

test("create new logger with new transport", () => {


    class MyTransport extends TransportStream {
        constructor(options) {
            super(options);
            // Email config: host, port, auth, from, to
            this.mailOptions = {
                host: options.host,
                port: options.port,
                secure: options.secure || false,
                auth: {
                    user: options.user,
                    pass: options.pass
                }
            };
            this.from = options.from;
            this.to = options.to;
            this.transporter = nodemailer.createTransport(this.mailOptions);
        }

        log(info, next) {
            const message = `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`;
            const mailData = {
                from: this.from,
                to: this.to,
                subject: `Log: ${info.level}`,
                text: message
            };
            this.transporter.sendMail(mailData, (error, infoMail) => {
                if (error) {
                    console.error('Error sending email:', error);
                } else {
                    console.log('Log email sent:', infoMail.response);
                }
                next();
            });
        }
    }

    const logger = winston.createLogger({
        level: "silly",
        transports: [
            new MyTransport({
                host: "smtp.example.com", // ganti dengan SMTP server Anda
                port: 587, // port SMTP
                secure: false, // true untuk port 465, false untuk lainnya
                user: "user@example.com", // email pengirim
                pass: "password", // password email pengirim
                from: "user@example.com", // email pengirim
                to: "destination@example.com" // email tujuan
            })
        ]
    });

    logger.info("This is a test log message");
});
