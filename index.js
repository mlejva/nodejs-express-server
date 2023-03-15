import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const email = req.body.email;
  if (!email) {
    res.status(400).send('Error: No email provided.');
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    res.status(400).send('Error: Invalid email format.');
  } else {
    res.send(email);
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});