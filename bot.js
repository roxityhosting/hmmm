// ibot
// Version: 0.9 PRE-ALPHA / PRE-REALEASE
// Discord Code: GR9qVVd

const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const prefix = '-';

var randomColor = Math.floor(Math.random() * 16777215).toString(16);
   
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
    client.user.setActivity('with discord.js | -help', { type: 'PLAYING' });
    client.user.setStatus("online");
});

client.on('guildMemberAdd', member => {
        let name = client.user.username;
    var embedinfo = new Discord.RichEmbed()
        .setFooter("© " + name + " | Made by Aaron #1742")
        .setColor(randomColor)
        .setTitle(":wave: Welcome")
        .setDescription("Use -cmds to find out about the commands!")
     member.sendEmbed(embedinfo);
       console.log(`${member.user.username} has joined`);
});
    
if (message.author.bot) return;
   
    if (message.channel.type === 'dm') {
        var embederrordm = new Discord.RichEmbed()
        .setTitle('Error 404:')
        .setDescription('Our system can only detect things in the a guild.')
        .setImage('https://media.giphy.com/media/gU25raLP4pUu4/giphy.gif')
        .setFooter('Error 404: DM Message')
        .setColor('#000000');
        message.channel.send(embederrordm);
        return;
    }
   
   
   if (message.mentions.members.firstKey() === '437524390280822784') {
    message.channel.send(':zzz: :zzz: :sleeping: You woke me. How rude! :angry: If you need me use -help or -cmds!')
   }

        let msg = message.content.toLowerCase();
        let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase();

        if (!message.content.startsWith(prefix)) return;

        try {

            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(Discord, client, message, args);

        } catch (e) {

            console.log(e);

        } finally {

            console.log(`${message.author.username} ${message.author.id} ran the command: ${cmd} probably unsuccsesfully!`);

        }
    })


client.login(process.env.BOT_TOKEN);