const { Client, GatewayIntentBits, Collection } = require("discord.js");
const WOK = require('wokcommands');
const path = require('path');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
})



client.on("ready", () => {
  client.user.setActivity("Funy bot"),
  console.log("Online")


  
  new WOK({
    client,
    commandsDir: path.join(__dirname, "commands"),
    testServers: ['950856571653611520'],
  })
});



client.login(process.env.token);