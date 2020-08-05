const wget = require('wget-improved');
const settings = require(process.cwd() + "/config.json");
const fs = require("fs");

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * COMMAND NAME: Install
 * COMMAND USAGE: [prefix] install [optinal:path]
 *                NOTE: Message must have an attachment!
 * COMMAND INFO: Used to install new commands over Discord.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */
module.exports = function(msg, client){
  if(settings.admins.includes(msg.author.id)){
    if(msg.attachments != undefined && msg.attachments.first() != undefined ){
      var attachment = msg.attachments.first();

      var dir = "./" + settings.commandsPath + "/";
      if(msg.content.split(" ").length = 3){
        dir += msg.content.split(" ")[2]+ "/";
        if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
        }
      }

      let download = wget.download(attachment.url, dir + attachment.name, {});

      download.on('end', function(output) {
        msg.reply("yes m'lord files downloaded m'lord");
      });

    } else {
      msg.reply("command must feature a command script!");
    }
  } else {
    msg.reply("check yourself fool, youre not admin");
  }
}
