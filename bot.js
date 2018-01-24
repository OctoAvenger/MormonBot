//Defines Bot/prefixs and languages used.
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const prefix = "-";

//Pulls JSON files to main folder.
var nicks = JSON.parse(fs.readFileSync("nicks.json"));
var BOM = JSON.parse(fs.readFileSync("book-of-mormon.json"));
var DC = JSON.parse(fs.readFileSync("doctrine-and-covenants.json"));
var PGP = JSON.parse(fs.readFileSync("pearl-of-great-price.json"));

//Messages and commands that MormonBot can proform.
client.on("message", (message) => {
    //Help message. Useful for new users.
    if (message.content == prefix + "help") {
            let embed = new Discord.RichEmbed();
            embed.setColor("#FC9509");
            embed.setTitle("My commands are as follows:\n\n");
            embed.setDescription("**General commands:**\n-help *Displays this message.*\n[BOOK CHAPTER:VERSE-VERSE] Example: **1 Nephi 1:1-3** *Displays verse.*\n\n**ALL COMMANDS AS OF VERSION 0.5.0");
            message.channel.send({ embed });
    }
    //Code for displaying verses.
    if (message.content.includes("")) {
        message.channel.send("");
    }
});

//Bot login Token.
client.login(process.env.BOT_TOKEN);
