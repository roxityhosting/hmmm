var roblox = require('noblox.js')
const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {
	let baseurl = "https://verify.eryn.io/api/user/"
    	let reason1 = message.mentions.users.first();
	let reason = reason1.id;
	const url = baseurl + reason;
	let {body} = await superagent
	.get(url);
	let id = body.robloxId;
	let {rank} = await superagent
	.get("https://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&groupid=937709&playerid=" + id);
	let username = body.robloxUsername;
	if (id.length < 1) 
		return message.reply('You are not verified yet! Please verify with KCverify.');
	let avatarurl = "https://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&userid=" + id;
	let rig = await roblox.getRankNameInGroup(937709, id)
	let groupurlbase = "https://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&groupid=937709&playerid=";
	let groupurl = groupurlbase + id;
          const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
	  	   .setDescription("**Roblox Name: **\n" + username + "\n**Roblox ID:**\n" + id + "\n**Profile Link:** \n" + "https://www.roblox.com/users/" + id + "\n**Rank In Group:**\n" + rig)
		   .setFooter("Requested by " + message.author + " at ")
		   .setTimestamp()
	  	   .setThumbnail(avatarurl)
	  	   message.channel.send(rank)
		   message.channel.sendEmbed(embed);
}
