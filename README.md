# Beepis Bot
This is a super light weight Discord bot build on discord.js that was designed to be as flexible as possible and allow generative growth.
## Installation
To start using Beepis Bot you will have to have a current version of NodeJS installed. From there an installation script has been included to make jump starting a bot as easy as possible along with a Docker start script.
## Framework
To make Beepis Bot as simple as possible I made it such that each command is a separate script from the main code. The main `bot.js` will pass the event for the last message and the client object to each command file. To keep things as simple as possible the file name is the name of the command, IE the command `./commands/admin/get.js` can be accessed by typing `[prefix] admin/get [file]`.
