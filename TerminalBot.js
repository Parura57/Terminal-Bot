'use strict';

const { exec } = require("child_process");
const Discord = require('discord.js');					//Imported the Discord api
var config = require('./config.json');					//Imported the config file

const prefix = config.prefix;						//Load a prefix which must be written before the command in Discord

const client = new Discord.Client();					// Create an instance of a Discord client



client.on('ready', () => {
  console.log('Bot ready!');
});

// Listen for messages
client.on('message', message => {
  /*// If the message is "ping"						//Test function, useless
  if (message.content === prefix.concat('ping')) {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }*/

  if (message.content.startsWith(prefix)) {
    let args = message.content.slice(prefix.length, message.length);
    exec(args, (error, stdout, stderr) => {				//Execute the command given by the Discord user
	if (error) {
	    console.log(`error: ${error.message}`);
	    message.channel.send(`error: ${error.message}`);
	    return;
	}
	if (stderr) {
	    console.log(`stderr: ${stderr}`);
	    message.channel.send(`stderr: ${stderr}`);
	    return;
	}
	console.log(`stdout: ${stdout}`);
	message.channel.send("``` ".concat(`${stdout}`.concat(' ```')));
    });
  }
});

// Log the bot in using the bot token
client.login(config.token);