// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { recipient, subject, body, accessToken } = req.body;

  const emailData = {
    fromAddress: 'your-email@your-domain.com',
    toAddress: recipient,
    subject: subject,
    content: {
      type: 'html',
      content: body,
    },
  };

  try {
    const response = await axios.post(
      'https://mail.zoho.com/api/accounts/{account_id}/messages', // Reemplaza {account_id} con tu ID de cuenta Zoho Mail
      emailData,
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
