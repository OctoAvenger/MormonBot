//Defines Bot
const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "-";

client.on("message", (message) => {
  if(message.content == "test") {
    message.channel.send();
});

//Bot login Token.
client.login(process.env.BOT_TOKEN);
