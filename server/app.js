const express = require('express');
const { default: axios } = require('axios');
const app = express();
require('dotenv').config();

app.get('/', async (req, res) => {
  const result = await axios.get(`https://od-api.oxforddictionaries.com/api/v2`);
  console.log('result', result);
});

app.listen(process.env.PORT, async () => {
  console.log(`Server running on: http://localhost:${process.env.PORT}`);

  try {
    console.log('connected to server');
    const result = await axios.get(`https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/query`, {
      headers: { 
        app_id: process.env.app_id,
        app_key: process.env.app_key
      }
    });
    console.log('result', JSON.stringify(result.data));

  } catch (err) {
    console.log(err);
    console.log(`Server startup failed: ${err}`);
    process.exit(1);
  }
});

