const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const openAiApiKey = process.env.OPENAI_API_KEY;

const client = axios.create({
    headers: {
        'Authorization': `Bearer ${openAiApiKey}`,
        'Content-Type': 'application/json',
    }
})

const data = {
    prompt: "Once upon a time",
    max_tokens: 10,
    temperature: 0.7
}

client.post('https://api.openai.com/v1/engines/davinci/completions', data)
  .then(response => {
    console.log(response.data.choices[0].text);
  })
  .catch(error => {
    console.error(error);
  });
