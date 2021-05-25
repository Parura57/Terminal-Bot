# Terminal-Bot

This is a simple bot for Discord which essentially lets you execute code remotely on your machine, sending input and output through Discord.
---
**THIS PROJECT IS DEFINITELY NOT SECURE, DON'T USE IT OUTSIDE OF A VM, THIS IS EXECUTING TERMINAL COMMANDS ON YOUR MACHINE**
---
**Only tested on Linux, should work on MacOS, might work on Windows**
---
**Installation:**
  1. Install Node.js
    - *For Fedora/CentOS*   `sudo dnf install nodejs`
    - *For Arch*            `sudo pacman -S nodejs`
    - *For Ubuntu/Debian*   `sudo apt install nodejs`
  2. Install the Discord Bot API
    - `npm install discord.js`
  3. Create a discord Bot
    - Create an application in the [Discord developper portal](https://discordapp.com/developpers/applications)
    - Create a bot in the application
    - Add the bot to a desired server
  4. Run the program
    - Replace the Discord bot ID in config.json
    - Run the program: `node TerminalBot.js`


**Usage**
  - Enter a bash command with "!" preceeding it (you can change that in the config file) and the bot should answer you with the output
