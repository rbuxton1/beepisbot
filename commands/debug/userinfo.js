module.exports = function(msg, client){
  msg.reply("```" + JSON.stringify(msg.author) + "```");
}
