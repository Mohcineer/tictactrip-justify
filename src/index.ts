import express, { type Request, type Response } from 'express';
import { justifyText } from './services/justify.service.js'; // Note le .js à la fin (requis par NodeNext)

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.text());

app.use(express.json());

app.post('/api/token', (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const token = Buffer.from(email).toString('base64');
  return res.json({ token });
});


app.post('/api/justify', (req: Request, res: Response) => {
  const text = req.body;

  if (!text || typeof text !== 'string') {
    return res.status(400).send('Text content is required (ContentType: text/plain)');
  }

  try {
    const justified = justifyText(text, 80);
    res.setHeader('Content-Type', 'text/plain');
    return res.send(justified);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});