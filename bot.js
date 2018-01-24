//Defines Bot
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const prefix = "-";

var books = JSON.parse(fs.readFileSync("myfile.json"));

client.on("message", (message) => {
  if(message.content == "test") {
    message.channel.send();
});

//Bot login Token.
client.login(process.env.BOT_TOKEN);
