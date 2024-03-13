const { SlashCommandBuilder } = require("discord.js");
const { guildId } = require("../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("allmembers")
    .setDescription("Provides a list of all server members"),
  async execute(interaction) {
    // await interaction.deferReply({ ephemeral: true });

    const serverInfo = await getServerInfo(interaction);
    const members = serverInfo.map((e) => {
      return { username: e.user.username, id: e.user.id };
    });

    console.log(members, "serveri info");
    await interaction.reply({ content: 'Members have been retrieved' });

    // interaction.editReply({ embeds: [members] });
  },
};

async function getServerInfo(interaction) {
  try {
    const members = await interaction.guild.members.fetch();

    return members;
  } catch (error) {
    console.log(error);
  }
}
