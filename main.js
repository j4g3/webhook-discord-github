require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const discordBot = require("./discordBot");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/webhook", async (req, res) => {
    const { message, url } = req.body.head_commit;
    const { name, username } = req.body.head_commit.author;
    
    const messageSend = `Novo commit: ${message}\nFeito por ${name}\n Link do commit: ${url}`;

    await discordBot(process.env.TOKEN, messageSend);
    res.send({
        "status": "ok",
    });
});

app.listen(3000);
