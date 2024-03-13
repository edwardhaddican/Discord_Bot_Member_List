const { SlashCommandBuilder } = require("discord.js");
const { guildId } = require("../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("allmembers")
    .setDescription("Provides a list of all server members"),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild

    // console.log(interaction.member, 'interaction')
    // console.log(interaction.member.GuildMember, 'interaction')

    await interaction.deferReply({ ephemeral: true });

    const serverInfo = await getServerInfo(interaction);
    const members = serverInfo.forEach((e) => {
      console.log(e, " I am e");
    });

    console.log(serverInfo, "serveri info");
    // await interaction.reply({content: 'hello world'});

    interaction.editReply({ embeds: ['hello world'] });

    //   const list = interaction.member.guilds.get(guildId);
    // console.log(list, "list");

    // console.log("did the all members command run???", interaction.members);
    // // Get the Guild and store it under the variable "list"
    // const list = client.guilds.get(guildId);
    // console.log(list, "list");
    // // Iterate through the collection of GuildMembers from the Guild getting the username property of each member
    // list.members.forEach((member) => console.log(member.user.username));

    // const guild = client.guilds.resolve(guildId);
    // console.log(guild, "i am guild");
    // // Fetch the members of the guild and log them
    // try {

    //     const guildMembers = await guild.members.fetch()

    //     console.log(guildMembers, '!!!1')
    // } catch (error) {
    //     console.log(error)
    // }

    // await interaction.reply(
    //   `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`
    // );
  },
};

async function getServerInfo(interaction) {
  console.log("function called");
  try {
    // const members = await interaction.guild.members.fetch();

    const members = await interaction.guild.members.fetch();

    console.log("am i here??", members);

    // await interaction.guild.members.fetch(); //cache all members in the server
    // // console.log(interaction.guild.roles.cache, 'here')
    // const role = interaction.guild.roles.cache.find(
    //   (role) => role.name === "Admin"
    // ); //the role to check
    // const totalAdmin = role.members.map((m) => m.id); // array of user IDs who have the role
    // const totalMembers = totalAdmin.length; // how many users have the role

    // const serverInfo = {
    //   totalAdmin,
    //   totalMembers,
    // };
    return members;
  } catch (error) {
    console.log(error);
  }
}
