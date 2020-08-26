/*
 *  Tests the Alpha-ness of a specific user. Looking at the script before playing is cheating
 * and instantly makes you beta btw.
 */
module.exports = function(msg, client) {
  msg.reply("reply with the correct emoji to become alpha").then(res => {
    const collector = res.createReactionCollector((reaction, user) => { return true; }, {/*time: 2147483646 */});

    collector.on("collect", r => {
      if(r.emoji.name == "👌"){
        //do the magic
        msg.reply("you are alpha now");
      } else {
        msg.reply("beta cuck, get fucked");
      }
    });
    collector.on("end", collected => {
      //Not sure, just doing it incase this happens
      console.log("collected " + collected.size + " responses");
    });
    
  }, rej => {
    msg.reply("idk what we broke but its broke dude");
  });
}
