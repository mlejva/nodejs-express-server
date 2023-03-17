import express from 'express';
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  const email = req.body.email;
  if (!email) {
    return res.status(400).json({ error: 'No email provided' });
  }
  const emailParts = email.split('@');
  const username = emailParts[0];
  res.json({ username });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});