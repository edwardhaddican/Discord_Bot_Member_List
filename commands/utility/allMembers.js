const { SlashCommandBuilder } = require("discord.js");
const { guildId } = require("../../config.json");
const fs = require("node:fs");

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

    exportDataAsCSVFile(members);

    await interaction.reply({ content: "Members have been retrieved" });

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

async function exportDataAsCSVFile(membersArrOfObjects) {
  console.log(membersArrOfObjects, "membersArrOfObjects");
  try {
    // Get the keys which will be used as the title, add them to an array and put that into the refined data in the first position
    const titleKeys = Object.keys(membersArrOfObjects[0]);
    const refinedData = [titleKeys];

    // Loop over the Members Array, Use Object.values to get an array of the values and push that array into the refinedData array
    membersArrOfObjects.forEach((e) => {
      refinedData.push(Object.values(e));
    });

    // Now we need to create a string that will become our csvContent
    let csvContent = "";

    refinedData.forEach((row) => {
      return (csvContent += row.join(",") + "\n");
    });

    // Next we need to create and configure a blob
    // const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8," });
    // const objUrl = URL.createObjectURL(blob);

    // Now we will use fs to wrtie our file to our system.

    fs.writeFile("allMembersList.csv", csvContent, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log("File saved successfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
}
