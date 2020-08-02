const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require("./config.json");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.content.startsWith(settings.prefix) && !msg.author.bot){
    try {
      require("./" + settings.commandsPath + "/" + msg.content.replace(settings.prefix +" ", "").split(" ")[0])(msg, client);
    } catch(e) {
      msg.reply("no <3\n```" + e + "```");
      console.error(e);
    } finally {
      try {
        delete require.cache[require.resolve("./" + settings.commandsPath + "/" + msg.content.replace(settings.prefix +" ", "").split(" ")[0])];
      } catch (e) { console.log("Couldn't remove from requirements"); }
    }

  }
});

client.login(settings.token);
