/*
 * Sends a picture from Berthoud Pass, relatively up to date.
 */
module.exports = function(msg, client) {
  msg.reply(":mountain:", {files: ["https://i.cotrip.org/dimages/camera?imageURL=liveview/US40BerthoudPassParkingLot.jpg"]});
}
