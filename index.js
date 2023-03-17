
            import { createRequire } from "module";
            const require = createRequire(import.meta.url);
            const express = require('express');
const { check, validationResult } = require('express-validator');

const app = express();

app.use(express.json());

app.post('/validate-email', [
  check('email').isEmail()
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send('Ok');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});