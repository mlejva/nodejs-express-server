
            import { createRequire } from "module";
            const require = createRequire(import.meta.url);
            
import express from 'express';
import { WebClient } from '@slack/web-api';

const app = express();
const port = 3000;

app.use(express.json())

app.post('/', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send('Email is required');
  }

  const slackClient = new WebClient(process.env.SLACK_ACCESS_TOKEN);
  const message = `User '${email}' signed up`;
  try {
    await slackClient.chat.postMessage({
      channel: 'general',
      text: message,
    });
  } catch (error) {
    console.error(error);
  }

  res.send('Success');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
