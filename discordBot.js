const Discord = require("discord.js");
const client = new Discord.Client();

async function App(token, message) {
    await client.login(token);
    await client.channels.get("735563534917959691").send(message);
}

module.exports = App;
