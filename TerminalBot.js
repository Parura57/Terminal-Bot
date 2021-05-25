'use strict';

const { exec } = require("child_process");

// Import the discord.js module
const Discord = require('discord.js');

// Sets a prefix for commands
const prefix = '!'

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('Bot ready!');
});

// Listen for pings
client.on('message', message => {
  // If the message is "ping"
  if (message.content === prefix.concat('ping')) {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }

  if (message.content.startsWith(prefix)) {
    let args = message.content.slice(prefix.length, message.length);
    exec(args, (error, stdout, stderr) => {
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


/*
  let args = message.content.slice(prefix.length, message.length);
  exec(args, (error, stdout, stderr) => {
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
});
*/

// Log our bot in using the token from https://discord.com/developers/applications
client.login('Nzg2OTkyOTM0ODQ2MjAxODc3.X9OeSQ.P4bOKZunVEHDfroHo_GQbX2wBRM');