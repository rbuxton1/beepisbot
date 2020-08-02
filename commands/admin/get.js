const { Client, MessageAttachment } = require('discord.js');
const settings = require(process.cwd() + "/config.json");

module.exports = function(msg, client){
  if(settings.admins.includes(msg.author.id)){
    var arrMsg = msg.content.split(" ");
    if(arrMsg.length == 3){
      const attachment = new MessageAttachment(process.cwd() + "/" + settings.commandsPath + "/" + arrMsg[2] + ".js");
      msg.reply("here ya are", attachment);
    }
  } else {
    msg.reply("FOOL you have no power here!");
  }
}
