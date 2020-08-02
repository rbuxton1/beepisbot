const { Client, MessageAttachment } = require('discord.js');
const settings = require(process.cwd() + "/config.json");

module.exports = function(msg, client){
  if(settings.admins.includes(msg.author.id)){
    var temp = settings.token;
    settings.token = "hidden";
    msg.reply("```" + JSON.stringify(settings, null, "\t") + "```");
    settings.token = temp;
  } else {
    msg.reply("FOOL you have no power here!");
  }
}
