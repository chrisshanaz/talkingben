const express = require("express");
const app = express();

app.listen("3000", () => {
  console.log("project running");
})

app.get("/", (req, res) => {
  res.send("Ben.");
})

const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.on("ready", function() {
  client.user.setActivity("ben help", { type: "STREAMING" });
  console.log("READY FOR ACTION!");
});

var isBenOn = new Boolean(false);
var isBenReset = new Boolean(false);
let RNG = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

isBenOn = false;

client.on('message', message => {

  if(message.mentions.has(client.user) && !isBenOn){
     message.channel.send("Ben.");
     isBenOn = true;
     return;
  }
  
  if((message.mentions.has(client.user) || message.content.toLowerCase().includes("ben"))&& isBenOn){
    RNG = getRandomInt(17);
    console.log(RNG);

    const exampleEmbed = new MessageEmbed()
	  .setColor('#0099ff')
	  .setTitle('Talking Ben Help')
	  .setURL('https://discord.gg/22HS7qZA')
	  .setDescription('Commands')
	  .addFields(
	  	{ name: 'How To Activate', value: 'If I hang up or am not started, just ping me' },
  		{ name: 'How to chat with me', value: 'Simply say ben, Ben, or @ me to get a response', inline: true },
  		{ name: 'Special Commands', value: 'ben embed fail', inline: true },
  	)  
    if(message.content.toLowerCase().includes("dover")){
      message.content.send("https://tenor.com/view/bend-over-gif-21069300");    
      return;
    }

    if(message.content.toLowerCase().includes("help")){
      message.channel.send({ embeds: [exampleEmbed] });
      return;
    }

    if(message.content.toLowerCase().includes("embed fail")){
      message.channel.send("https://tenor.com/view/epic-embed-fail-ryan-gosling-cereal-embed-failure-laugh-at-this-user-gif-20627924");
      return;
    }

    if(RNG === 0 || RNG === 2 || RNG === 3 || RNG === 1){
      message.channel.send("Yes.");
    }

    if(RNG === 5 || RNG === 6 || RNG === 7 || RNG === 4){
      message.channel.send("No.");
    }

    if(RNG === 9 || RNG === 10 || RNG === 11 || RNG === 8){
      message.channel.send("Ho Ho Ho.");
    }

    if(RNG === 13 || RNG === 14 || RNG === 15 || RNG === 12){
      message.channel.send("Ugh.");
    }

    if(RNG === 16 ){
      message.channel.send(":telephone:");
      isBenOn = false;
    }
  }
})

client.login(process.env.token);
