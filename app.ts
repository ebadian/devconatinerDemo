import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";
import nunjucks from "nunjucks";

import path from "path"


dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;
const isDev = app.get('env') === 'development';

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

async function initializeApp() {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    })
}

app.set('views', __dirname + '/templates');


app.get('/', (req, res) => {
    res.render('index.njk');
  });



export { app };

if (require.main === module) {
    initializeApp().catch(console.error);
  }


