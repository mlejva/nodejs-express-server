
            import { createRequire } from "module";
            const require = createRequire(import.meta.url);
            
import express from 'express';
const app = express();
const port = 3000;

app.use(express.json())

app.post('/', (req, res) => {
  const email = req.body.email;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).send('Invalid email format');
  } else {
    const SlackREST = require('@sagi.io/workers-slack');
    const botAccessToken = 'xoxb-625989678439-4949424452337-fLgQoJFqYBYyzOeoRfZ1WMrj';
    const SlackAPI = new SlackREST({ botAccessToken });
    const data = { channel: 'general', text: `User '${email}' signed up` };
    SlackAPI.chat.postMessage(data)
      .then(() => {
        res.send('Success');
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error sending message to Slack');
      });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
