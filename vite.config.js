import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import nodemailer from 'nodemailer'

const localApiPlugin = () => ({
  name: 'local-api',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url === '/api/contact' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          try {
            const data = JSON.parse(body);
            const { user_name, user_email, message } = data;

            if (!user_name || !user_email || !message) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Missing required fields' }));
              return;
            }

            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'dheerajgami22@gmail.com',
                pass: 'tabo snlu tlrs jdhg'
              }
            });

            await transporter.sendMail({
              from: `"${user_name}" <${user_email}>`,
              to: 'dheerajgami22@gmail.com',
              replyTo: user_email,
              subject: `New Portfolio Contact from ${user_name}`,
              text: message,
              html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                  <h2>New Contact Form Submission</h2>
                  <p><strong>Name:</strong> ${user_name}</p>
                  <p><strong>Email:</strong> ${user_email}</p>
                  <hr />
                  <h3>Message:</h3>
                  <p style="white-space: pre-wrap;">${message}</p>
                </div>
              `,
            });

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, message: 'Email sent successfully!' }));
          } catch (error) {
            console.error('Error sending email:', error);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Failed to send email.' }));
          }
        });
        return;
      }
      next();
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    localApiPlugin()
  ],
})
