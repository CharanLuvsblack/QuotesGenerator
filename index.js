const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;
require('dotenv').config();

const ApiKey = process.env.api_key;

app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/Quote',async (req,res)=>{
    const fetchApi = await fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": ApiKey,
            "x-rapidapi-host": "quotes15.p.rapidapi.com"
        }
    });
    const QuoteFetched = await fetchApi.json();
    console.log(QuoteFetched);
    res.json(QuoteFetched);
});