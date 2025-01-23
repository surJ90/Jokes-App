import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended:true }));

let data;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
        res.render('index.ejs', { data : response.data });
    } catch (error) {
        console.error(`Failed to load ${error}`);
        res.render('index.ejs', { error : error.message });
    }   
});

app.listen(port, () => {
    console.log(`Listening on -> http://localhost:${port}`);
});