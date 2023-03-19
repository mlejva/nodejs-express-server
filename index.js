
            import { createRequire } from "module";
            const require = createRequire(import.meta.url);
            
import express from 'express';
const app = express();
const port = 3000;

app.use(express.json())

app.post('/', (req, res) => {
  if (req.body.email) {
    res.send('Ok');
  } else {
    res.status(400).send('Error: Email is missing');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
