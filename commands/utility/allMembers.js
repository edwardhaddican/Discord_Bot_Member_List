const { SlashCommandBuilder } = require("discord.js");
const { guildId } = require("../../config.json");


module.exports = {
  data: new SlashCommandBuilder()
    .setName("allmembers")
    .setDescription("Provides a list of all server members"),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild

    console.log(interaction.member, 'interaction')

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
    




    await interaction.reply(
      `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`
    );
  },
};
