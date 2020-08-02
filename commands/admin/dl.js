const wget = require('wget-improved');
const settings = require(process.cwd() + "/config.json");

module.exports = function(msg, client){
  if(settings.admins.includes(msg.author.id)){
    if(msg.attachments != undefined && msg.attachments.first() != undefined ){
      var attachment = msg.attachments.first();

      let download = wget.download(attachment.url, "./" + settings.commandsPath + "/" + attachment.name, {});
      download.on('end', function(output) {
        msg.reply("all good boss man, heres some data on that: ``" + output + "``");
      });
    } else {
      msg.reply("command must feature a command script!");
    }
  } else {
    msg.reply("check yourself fool, youre not admin");
  }
}
