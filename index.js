
            import { createRequire } from "module";
            const require = createRequire(import.meta.url);
            const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const name = req.body.name;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  const names = name.split(' ');
  const firstName = names[0];
  const lastName = names.length > 1 ? names[names.length - 1] : '';
  return res.json({ firstName, lastName });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});