import express from 'express';
import { config } from 'dotenv';
import blog from './blog.js';
config();
const port = process.env.PORT;
const app  = express();

app.set('view engine','ejs'); //tell that we use ejs for templating
app.set('views','./views'); //tell that we use ./views for storing template

app.get('/' , (request,response) => {
    response.render('home',
        {
            blog : blog
        }
    );
})

app.listen(port , (request , response) => {
    console.log(`Server is running on http://localhost:${port}`);
})