//Defines Bot
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-";

//Bot login Token.
client.login(process.env.BOT_TOKEN);
