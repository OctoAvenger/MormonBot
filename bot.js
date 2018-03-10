//Defines bot/prefix and languages used.
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const prefix = ">";

//Pulls JSON files to main folder.
//var nicks = JSON.parse(fs.readFileSync("nicks.json"));
const JSON = require("./book-of-mormon.json");

function book() {
    var out = "";
    for(var book of json.books) {
        for(var chapter of book.chapters) {
            for(var verse of chapter.verses) {
                out += "**" + verse.reference + "**\n" + verse.text + "\n";
            }
        }
    }
    return out;
}
function splitByLast(string, char) {
    var index = string.lastIndexOf(char);
    return [string.substr(0, index), string.substr(index + 1)];
}

function splitReference(ref) {
    var split = splitByLast(ref, " ");
    var book = split[0], chapter = split[1];
    return {book: book, chapter: splitByLast(chapter, ":")[0], verse: splitByLast(chapter, ":")[1]};
}

//Messages and commands that MormonBot can proform.
bot.on("message", (message) => {
    //Help message. Useful for new users.
    if (message.content == prefix + "help") {
        let embed = new Discord.RichEmbed();
        embed.setColor("#FC9509");
        embed.setTitle("My commands are as follows:\n\n");
        embed.setDescription("**General commands:**\n" + prefix + "help *Displays this message.*\n[BOOK CHAPTER:VERSE-VERSE] Example: **1 Nephi 1:1-3** *Displays verse.*\n\n**Other commands:**\n" + prefix + "code *gives you a link to the GitHub.*\n\n**ALL COMMANDS AS OF VERSION 0.5.0**");
        message.channel.send({ embed });
}
    //Verse display
    if(message.content.startsWith(prefix)) {
        var content = message.content.substr(prefix.length);
        var command = message.content.split(/ (.+)/);
        var args = command[1];
        command = command[0];
        if(command == "displayVerse") {
            var spec = splitReference(args);
            var book = json.books.filter(function(book) {
                return book.name == spec.book;
            });
            var chapter = book.chapters[Number(spec.chapter) - 1];
            var verse = chapter.verses[Number(spec.verse) - 1];
            
            let embed = new Discord.RichEmbed();
            embed.setColor("#FC9509");
            embed.setTitle("Test\n\n");
            embed.setDescription("**" + verse.reference + "**\n" + verse.text);
            message.channel.send({ embed });
            console.log("Good.");
        }
    }
    if (message.content == prefix + "code") {
        message.channel.send("https://github.com/OctoAvenger/MormonBot");
    }
    });

//Bot login Token.
bot.login("TOKEN");
