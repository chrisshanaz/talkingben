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
var gifMode = new Boolean(false);
let RNG = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

isBenOn = false;
gifMode = false;

client.on('message', message => {

  if(message.content.toLowerCase().includes("ben help")){
    const exampleEmbed = new MessageEmbed()
	  .setColor('#0099ff')
	  .setTitle('Talking Ben Help')
	  .setURL('https://discord.gg/22HS7qZA')
	  .setDescription('Commands')
	  .addFields(
	  	{ name: 'How To Activate', value: 'If I hang up or am not started, just ping me or write "ben start"' },
  		{ name: 'How to chat with me', value: 'Simply say ben, Ben, or @ me to get a response', inline: true },
  		{ name: 'Special Commands', value: 'ben embed fail. ben dover. ben chug. ben eat. ben gifmode', inline: true },
      { name: 'Bot Version', value: 'v1.1, bot by shanaz#6969'},
  	)  

    message.channel.send({ embeds: [exampleEmbed] });
    return;
  }

  if(message.content.toLowerCase().includes("ben gifmode")){
      gifMode = !gifMode;
      if(gifMode){
        message.channel.send("GIF Mode set to **ON**")
      } else {
        message.channel.send("GIF Mode set to **OFF**")
      }
      return;
    }
  
  if((message.mentions.has(client.user) || message.content.toLowerCase().includes("ben start")) && !isBenOn){
     if(gifMode){
       message.channel.send("https://ibb.co/DKNbyGh");
     } else {
       message.channel.send("Ben.");
     }
     
     isBenOn = true;
     return;
  }
  
  if((message.mentions.has(client.user) || message.content.toLowerCase().includes("ben"))&& isBenOn){
    if(message.author.bot) return;
    
    RNG = getRandomInt(17);
    console.log(RNG);
    
    if(message.content.toLowerCase().includes("dover")){
      message.channel.send("https://tenor.com/view/bend-over-gif-21069300");    
      return;
    }

    if(message.content.toLowerCase().includes("chug")){
      message.channel.send("https://tenor.com/view/talking-ben-drinking-apple-cider-throw-rude-gif-22031991");    
      return;
    }

    if(message.content.toLowerCase().includes("eat")){
      message.channel.send("https://tenor.com/view/talking-ben-eating-beans-gif-22187056");    
      return;
    }

    if(message.content.toLowerCase().includes("embed fail")){
      message.channel.send("https://tenor.com/view/epic-embed-fail-ryan-gosling-cereal-embed-failure-laugh-at-this-user-gif-20627924");
      return;
    }

    if(RNG === 0 || RNG === 2 || RNG === 3 || RNG === 1){
      if(!gifMode){
        message.channel.send("Yes.");
      } else {
        message.channel.send("https://ibb.co/q9ZQTWS");
      }
    }

    if(RNG === 5 || RNG === 6 || RNG === 7 || RNG === 4){
      if(!gifMode){
        message.channel.send("No.");
      } else {
        message.channel.send("https://ibb.co/kyCPwxg");
      }
    }

    if(RNG === 9 || RNG === 10 || RNG === 11 || RNG === 8){
      if(!gifMode){
        message.channel.send("Ho Ho Ho.");
      } else {
        message.channel.send("https://ibb.co/HzQZ3Qb");
      }
    }

    if(RNG === 13 || RNG === 14 || RNG === 15 || RNG === 12){
      if(!gifMode){
        message.channel.send("Ugh.");
      } else {
        message.channel.send("https://ibb.co/x8v8xHB");
      }
    }

    if(RNG === 16 ){
      if(gifMode){
        message.channel.send("https://tenor.com/view/talking-ben-ben-hang-up-bye-goodbye-gif-24987183");
      } else {
        message.channel.send(":telephone:");
      }
      isBenOn = false;
    }
  }
})

client.login(process.env.token);
