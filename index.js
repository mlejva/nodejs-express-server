
            import { createRequire } from "module";
            const require = createRequire(import.meta.url);
            
import express from 'express';
import { WebClient } from '@slack/web-api';

const app = express();
const port = 3000;

app.use(express.json())

app.post('/', (req, res) => {
  const { email } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    return res.status(400).send('Invalid email');
  }

  const slackClient = new WebClient(process.env.SLACK_ACCESS_TOKEN);
  const message = `User '${email}' signed up`;

  slackClient.chat.postMessage({
    channel: 'general',
    text: message,
  });

  return res.send('Success');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
