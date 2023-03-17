
            import { createRequire } from "module";
            const require = createRequire(import.meta.url);
            import express from 'express';
const app = express();
const port = 3000;

app.use(express.json())

app.post('/', (req, res) => {
  const email = req.body.email;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) {
    res.status(400).send('Invalid email format');
  } else {
    res.send('Ok');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})