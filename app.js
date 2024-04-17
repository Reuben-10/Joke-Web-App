import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        res.render("index", {
            Joke: result.data.joke,
            Category: result.data.category
        });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
    
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});