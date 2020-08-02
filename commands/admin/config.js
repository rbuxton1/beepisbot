const { Client, MessageAttachment } = require('discord.js');
const settings = require(process.cwd() + "/config.json");
const fs = require('fs');

module.exports = function(msg, client){
  if(settings.admins.includes(msg.author.id)){
    var arrMsg = msg.content.split(" ");
    if(arrMsg.length == 4){
      settings[arrMsg[2]] = arrMsg[3];
      fs.writeFile(process.cwd() + "/config.json", JSON.stringify(settings, null, "\t"), function(err){
        if(!err) msg.reply("updated sire");
        else msg.reply("uh oh speghetti-o: ```" + error + "```");
      });
    } else {
      msg.reply("usage: config [name] [new value]");
    }
  } else {
    msg.reply("haha, no but that was still funny");
  }
}
