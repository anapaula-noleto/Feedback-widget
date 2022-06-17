import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bd6b2d1a38abc1",
    pass: "ea695ab79de4e5"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: 'Feedback widget <oi@feedbackwidget.com>',
      to: 'Ana Paula <apaulanazarenonoleto@gmail.com  >',
      subject: subject,
      html: body,
    })

  }

}