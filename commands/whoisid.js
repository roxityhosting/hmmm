
const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {
	let baseurl = "https://verify.eryn.io/api/user/"
    	let reason1 = args.slice(0).join(" ");
	const url = baseurl + reason1;
	let {body} = await superagent
	.get(url);
	let username = body.robloxUsername;
	let id = body.robloxId;
	let avatarurl = "https://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&userid=" + id;
          const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setTitle(":video_game: Get Info")
	  	   .setDescription("**Roblox Name: **\n" + username + "\n**Roblox ID:**\n" + id)
		   .setFooter("Requested by " + message.author.id + " at ")
	  	   .setImage(avatarurl)
		   .setTimestamp()
		   message.channel.sendEmbed(embed);
}


