
exports.run = (Discord, client, message, args) => {
    
    let name = client.user.username;
    let thumbnail = client.user.avatarURL;

    
function doMagic8BallVoodoo() {
   var rand = ['https://i.imgur.com/WQ5V8Rd.jpg', 'https://i.imgur.com/ZgHOitF.jpg', 'https://i.imgur.com/m3P3vwk.gif', 'https://i.imgur.com/WLMGXBh.gif', 'https://i.imgur.com/VEbyKim.jpg', 'https://i.imgur.com/VEbyKim.jpg', 'https://i.imgur.com/jL89xCv.jpg', 'https://i.imgur.com/3fTwFwd.jpg', 'https://i.imgur.com/9vRbHMH.gif', 'https://i.imgur.com/MJuwznT.gif', 'https://i.imgur.com/Kcv0TUt.jpg', 'https://i.imgur.com/HEoNmZY.jpg', 'https://i.imgur.com/mIh9dka.jpg', 'https://i.imgur.com/vrBX1A8.jpg', 'https://i.imgur.com/g9FxlM1.jpg', 'https://i.imgur.com/gLr0tIa.gif', 'https://i.imgur.com/zqnrrOy.jpg', 'https://i.imgur.com/NkpEpQR.jpg', 'https://i.imgur.com/C6dYAlY.jpg', 'https://i.imgur.com/HHPFolb.jpg', 'https://i.imgur.com/dHifEfW.jpg', 'https://i.imgur.com/1KF0iKA.jpg', 'https://i.imgur.com/ntpwQYs.jpg', 'https://i.imgur.com/YLw2sZO.jpg', 'https://i.imgur.com/RLp83h3.jpg', 'https://i.imgur.com/liJRO37.jpg', 'https://i.imgur.com/NpajDB3.jpg', 'https://i.imgur.com/VB2cSV7.jpg', 'https://i.imgur.com/BJpFt0D.jpg', 'https://i.imgur.com/DF1d6PP.jpg', 'https://i.imgur.com/KO2Tn1V.png', 'https://i.imgur.com/V1M6Wmn.jpg', 'https://i.imgur.com/dIAqxcQ.jpg', 'https://i.imgur.com/1WDzYjA.jpg', 'https://i.imgur.com/tq1GP0C.jpg', 'https://i.imgur.com/kI9hAF6.jpg', 'https://i.imgur.com/gmBtKEY.jpg', 'https://i.imgur.com/IkEWv8W.jpg', 'https://i.imgur.com/T5VtQ7g.jpg', 'https://i.imgur.com/TCA3zVz.jpg', 'https://imgur.com/a/8DzCMeh', 'https://i.imgur.com/q1xONTr.jpg'];

    return rand[Math.floor(Math.random()*rand.length)];
}
    const author = message.author;
		   const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setThumbnail(thumbnail)
       		   .setAuthor(name,thumbnail)
		   .addField(`Meow :cat:`,`Credit to: Robloxian_Thinking`)
       		   .setImage(doMagic8BallVoodoo())
		   .setFooter("Aww! Requested by " + message.author.tag + " at ")
		   .setTimestamp()
		   message.channel.send({embed})
    

}
