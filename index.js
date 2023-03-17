const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', (req, res) => {
  const name = req.body.name;
  if (!name) {
    res.status(400).send('Error: No name specified');
  } else {
    const names = name.split(' ');
    const firstName = names[0];
    const lastName = names.length > 1 ? names[names.length - 1] : '';
    res.send({ firstName, lastName });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});