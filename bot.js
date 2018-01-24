//Defines Bot
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const prefix = "-";

var BoM = JSON.parse(fs.readFileSync("book-of-mormon.json"));
var DC = JSON.parse(fs.readFileSync("doctrine-and-covenants.json"));
var PGP = JSON.parse(fs.readFileSync("pearl-of-great-price.json"));

client.on("message", (message) => {
  if(message.content == "test") {
    message.channel.send();
});

//Bot login Token.
client.login(process.env.BOT_TOKEN);
