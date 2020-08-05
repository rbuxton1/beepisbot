const wget = require('wget-improved');
const settings = require(process.cwd() + "/config.json");
const fs = require("fs");

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * COMMAND NAME: remove
 * COMMAND USAGE: [prefix] remove [path|file]
 * COMMAND INFO: Used to remove installed commands. WARN:
 *              Files deleted with this are gone for ever!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */
module.exports = function(msg, client){
  if(settings.admins.includes(msg.author.id)){
    if(msg.content.split(" ").length == 3){
      //format: prefix command path

      var dir = "./" + settings.commandsPath + "/" + msg.content.split(" ")[2];
      try {
        if(fs.existsSync(dir) && fs.lstatSync(dir).isDirectory()){
          fs.rmdirSync(dir, { recursive: true });
        } else if(fs.existsSync(dir) && fs.lstatSync(dir).isFile()){
          fs.unlinkSync(dir)
        }
      } catch (e) {
        msg.reply("wowzers ``" + e + "``")
      } finally {
        msg.reply("speak no more for it is gone.")
      }
    }
  } else {
    msg.reply("check yourself fool, youre not admin");
  }
}
