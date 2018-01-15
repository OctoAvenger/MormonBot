//Defines Bot
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-";

//These are all the messages it will send via command.
client.on("message", message => {
    if (message.content === prefix + 'test') {
        message.channel.send("**1 Nephi 1:1 - Book of Mormon (BoM)**\n\n```HTML\n <1> I NEPHI, having been born of goodly parents, therefore I was taught somewhat in all the learning of my father; and having seen many afflictions in the course of my days, nevertheless, having been highly favored of the Lord in all my days; yea, having had a great knowledge of the goodness and the mysteries of God, therefore I make a record of my proceedings in my days.```");
    }
});

//Bot login Token.
client.login(process.env.BOT_TOKEN);
