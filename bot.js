//Defines Bot/prefixs and languages used.
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const prefix = "-";

//Pulls JSON files to main folder.
//var nicks = JSON.parse(fs.readFileSync("nicks.json"));
var bom = JSON.parse(fs.readFileSync("book-of-mormon.json"));
var dc = JSON.parse(fs.readFileSync("doctrine-and-covenants.json"));
var pgp = JSON.parse(fs.readFileSync("pearl-of-great-price.json"));

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
    if (message.content.includes(bom.books.book.reference)) {
        message.channel.send("**" + bom.books.book.reference + " - Book of Mormon (BoM)**\n\n``` <" + bom.books.book.verse + "> " + bom.books.book.text + "```");
    }
    if (message.content.includes(dc.sections.section.reference)) {
        message.channel.send("**" + dc.sections.section.reference + " - Doctrine and Covenants (D&C)**\n\n``` <" + dc.sections.section.verse + "> " + dc.sections.section.text + "```");
    }
    if (message.content.includes(pgp.books.book.reference)) {
        message.channel.send("**" + pgp.books.book.reference + " - Pearl of Great Price (PGP)**\n\n``` <" + pgp.books.book.verse + "> " + pgp.books.book.text + "```");
    }
});

//Bot login Token.
client.login(process.env.BOT_TOKEN);
