const {EmbedBuilder} = require("discord.js");
const {CommandType} = require("wokcommands");
module.exports = {
  description: 'Dice',
  slash: true,
  testOnly: true,

  callback: async ({client, message, interaction}) => {
      const embed = new EmbedBuilder()
    .setTitle('Commands')
    .addFields({
      name: '/dice', value: 'x'})
    .addFields({
      name: '/dice2', value: 'x'})
    .setTimestamp()
    .setColor('#ffac4d')

    await interaction.reply({
       embeds: [embed],
     })
  },
};