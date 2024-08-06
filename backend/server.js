const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received message from ${name}, Email: ${email}, Message: ${message}`);
  // Echoing back the data received, or you can customize this message.
  res.json({ message: `Received your message, ${name}! We will reply to ${email} soon.` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
