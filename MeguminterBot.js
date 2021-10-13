// Intial statements 
const keepAlive = require("./server.js")
const Discord = require('discord.js');
const axios = require('axios')
const { Snake } = require('discord-gamecord');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES']});
const { MessageEmbed } = require('discord.js')
const { Permissions } = require('discord.js');
const { DiscordTogether } = require('discord-together');
client.on('ready', () => {
    console.log(`${client.user.tag} has awakened.`);
    client.user.setPresence({ activities: [{ name: 'with that bulgy wulgey.'}], status: 'online'})
});
const { MessageActionRow, MessageButton } = require('discord.js');
keepAlive()


// Global variables & constants 
var PREFIX = "%"
var date = new Date,
    dformat = [("00" + date.getDate()).slice(-2) + "/" +
    ("00" + (date.getMonth() +1)).slice(-2) + "/" +
    date.getFullYear()];


// Stupid lines
const Stupidlines = ["Barve is a bitch", "Oren is a coal hoe", "Palash is a roti", "Ansh is cursed"]
client.on('messageCreate', message => {
    if (!message.author.bot) {
    if (message.content.startsWith(Stupidlines[0])) {
        const SL1Embed = new MessageEmbed()
        .setColor('RANDOM')
        .addField(Stupidlines[1], '------')
        .addField(Stupidlines[2], '------')
        .addField(Stupidlines[3], '------')
      message.reply({embeds: [SL1Embed]})
    };
    if (message.content.startsWith(Stupidlines[1])) {
        const SL2Embed = new MessageEmbed()
        .setColor('RANDOM')
        .addField(Stupidlines[0], '------')
        .addField(Stupidlines[2], '------')
        .addField(Stupidlines[3], '------' )
        message.reply({embeds: [SL2Embed]})
    };  
    if (message.content.startsWith(Stupidlines[2])) {
        const SL3Embed = new MessageEmbed()
        .setColor('RANDOM')
        .addField(Stupidlines[0], '------')
        .addField(Stupidlines[1], '------')
        .addField(Stupidlines[3], '------')
        message.reply({embeds: [SL3Embed]})
    };
    if (message.content.startsWith(Stupidlines[3])) {
        const SL4Embed = new MessageEmbed()
        .setColor('RANDOM')
        .addField(Stupidlines[0], '------')
        .addField(Stupidlines[1], '------')
        .addField(Stupidlines[2], '------')
        message.reply({embeds: [SL4Embed]})
    };
   }
});


// Ping command:
client.on('messageCreate', message => {
    if (message.content === PREFIX +'ping' || message.content === PREFIX +'Ping') {
        const pingEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('pong in your ding dong!🏓')
        message.reply({embeds: [pingEmbed]});
    }
    else if (message.content === PREFIX +'pong' || message.content === PREFIX +'Pong') {
        const pongEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('ping in your dong ding?😕')
        message.reply({embeds: [pongEmbed]});
    };
});


// Stfu command:
client.on('messageCreate', message => {
        if (message.content.startsWith(PREFIX +"stfu") || message.content.startsWith(PREFIX +"Stfu")) {   
            const stfutarget = message.mentions.users.first();
            if (!stfutarget) return message.reply('Please mention a proper user be rude to!')
            .then(message => {setTimeout(() => message.delete(), 7000)
   }) 
        message.channel.send('<@'+stfutarget.id+'>, '+message.author.username+' wants you to see this:'+'https://cdn.discordapp.com/attachments/874447411144171610/876470355454226502/video0.mp4');
    };
});


// Cumge & Cumium:
client.on('messageCreate', message => {
    if (!message.author.bot) {
    if (message.content.startsWith('Cumge') || message.content.startsWith('cumge')) {
        message.reply('Cumium!');
    }
    else if (message.content.startsWith('Cumium') || message.content.startsWith('cumium')) {
        message.reply('Cumge!');
    };
  }
});


// I forgor:
client.on('messageCreate', message => {
    const forgor = ["forgor", "Forgor"]
    for (var i=0; i < forgor.length; i++) {
    if (message.content.includes(forgor[i])) {
        message.react('💀');
    }}; 
});


// Help command:
client.on('messageCreate', message => {
        if (message.content === PREFIX +'help s' ||  message.content === PREFIX +'Help s') {
        const helpsEmbed = new MessageEmbed()
      	.setColor('RANDOM')
	    .setTitle('You asked for it')
	    .setDescription(`
         Secret Commands: 
1. Saying \`Rich mf\` will ping Tzar or Barve with a 50:50 chance, the ping won't work on most other servers.
2. Saying \"Cumge\" or \"Cumium\" Gives \"Cumium\" or \"Cumgue\" as responses respectively if you say any one of the two words.
3. I forgor [Text is optional] Reacts to the message with \'💀\' if it begins with \"I forgor\".
4. Saying \"owo\",\"uwu\" and the likes will give you a funny response.
5. Saying \`Barve is a bitch\` or \`Oren is a coal hoe\` or \`Palash is a roti\` or \`Ansh is cursed\` will make me say the other three lines consecutively.`)
	    .setFooter('Most of these are inside jokes so don\'t worry if you can\'t understand them.');
    message.channel.send({ embeds: [helpsEmbed]});
    }
        if (message.content === PREFIX +'help' || message.content === PREFIX +'Help') {
        const helpEmbed = new MessageEmbed()
	          .setColor('RANDOM')
              .setAuthor('Meguminter help centre','https://images-ext-1.discordapp.net/external/GISf7QHPnhdhIblHze-aJ3xK2CHTv6HjLmemDMOZiSk/%3Fsize%3D512/https/cdn.discordapp.com/avatars/875333807962730496/63e1fbfc096b5a5d0f28bd2d6c36d4d2.webp')
	          .setTitle('Main Help page')
              .addField('Fun commands: ',`${PREFIX}Stfu [mention the user]
${PREFIX}Iflac
${PREFIX}Babil
${PREFIX}Edgy
${PREFIX}Ask [Question]
${PREFIX}Say [Text]
${PREFIX}Howgay
${PREFIX}Howbased
${PREFIX}Ship [First value] [Second value]
${PREFIX}Rps [Rock/Paper/Scissor]
${PREFIX}Snake`, true)
              .addField('Utility commands:', `${PREFIX}Ping
${PREFIX}Invite
${PREFIX}Credits
${PREFIX}Pfp [mentioning a user is optional]
${PREFIX}Banner [mentioning a user is optional]
${PREFIX}ID [mentioning a user is optional]
${PREFIX}RID [mention a role]
${PREFIX}CID [mentioning a channel is optional]
${PREFIX}Help 
${PREFIX}Explosion`, true)
              .addField('Discord Together activites', `${PREFIX}yt [Voice channel ID]
${PREFIX}chess [Voice channel ID]
${PREFIX}poker [Voice channel ID]
${PREFIX}betrayal [Voice channel ID]
${PREFIX}fishing [Voice channel ID]
${PREFIX}doodle [Voice channel ID]
${PREFIX}wordsnack [Voice channel ID]
${PREFIX}lettertile [Voice channel ID]`)
              .addField(`Do ${PREFIX}Help [category name] to get the description of the commands in that category.`, '||   ||')
              .addField('||Pssst... If you see this do \`%Help s\` for additional commands.||', '||    ||')
	          .setFooter('For any issues contact Oreniscool#3678');
      message.channel.send({ embeds: [helpEmbed] });
      }
    if(message.content === PREFIX +'help Fun' || message.content === PREFIX +'help fun' || message.content === PREFIX +'Help Fun' || message.content === PREFIX +'Help fun') {
       const funEmbed = new MessageEmbed()
            .setAuthor('Meguminter help centre','https://images-ext-1.discordapp.net/external/GISf7QHPnhdhIblHze-aJ3xK2CHTv6HjLmemDMOZiSk/%3Fsize%3D512/https/cdn.discordapp.com/avatars/875333807962730496/63e1fbfc096b5a5d0f28bd2d6c36d4d2.webp')
            .setTitle('Fun commands')
            .setColor('RANDOM')
            .addField(`${PREFIX}Stfu [mention the user]`, 'Puts a video to tell the person to Shut the frick up.' )
            .addField(`${PREFIX}Iflac`, 'Posts a joke from \'OMORI\'')
            .addField(`${PREFIX}Babil`, 'Posts a GIF of Babil Twerking.')
            .addField(`${PREFIX}Edgy`, 'Gives you a random Edgy line.')
            .addField(`${PREFIX}Ask [Question}`, 'Gives you an answer to your question.')
            .addField(`${PREFIX}Say [Text]`, 'Makes me say whatever you want.') 
            .addField(`${PREFIX}Howgay`, 'Gives you a percentage of how gay you are.')
            .addField(`${PREFIX}Howbased`, 'Gives you a percentage of how based you are.')
            .addField(`${PREFIX}Ship [First value] [Second value]`, 'Gives you the ship percentage of the two values.')
            .addField(`${PREFIX}Rps [Rock/Paper/Scissor]`, 'A round of Rock Paper Scissor against me.')
            .addField(`${PREFIX}Snake`, 'Play the snake game in Discord!.')
            .addField(`${PREFIX}yt`, 'Starts a session of the YouTube together activity within a Discord voice channel.')
            .addField(`${PREFIX}chess`, 'Starts a session of Discord chess within a Discord voice channel.')
            .addField(`${PREFIX}poker`, 'Starts a session of Discord poker within a voice channel.(You need to be 18+ to play)')
            .setFooter('Contact Oreniscool#3678 for any questions or issues.') 
        message.channel.send({embeds: [funEmbed]})
      }
    if(message.content === PREFIX +'help Utility' || message.content === PREFIX +'help utility' || message.content === PREFIX +'Help Utility' || message.content === PREFIX+'Help utility') {
       const utilityEmbed = new MessageEmbed()
            .setAuthor('Meguminter help centre','https://images-ext-1.discordapp.net/external/GISf7QHPnhdhIblHze-aJ3xK2CHTv6HjLmemDMOZiSk/%3Fsize%3D512/https/cdn.discordapp.com/avatars/875333807962730496/63e1fbfc096b5a5d0f28bd2d6c36d4d2.webp')
            .setTitle('Utility commands')
            .setColor('RANDOM')
            .addField(`${PREFIX}UD [insert the word you want to search]`, 'Gives you the definition of the word you search for from UrbanDictionary.')
            .addField(`${PREFIX}Ping`, 'Used to check if I am alive or not.')
            .addField(`${PREFIX}Credits`, 'Gives you the credits of the Meguminter bot.')
            .addField(`${PREFIX}Pfp [mention a user]`, 'Gives you the pfp of the mentioned user.')
            .addField(`${PREFIX}Banner [mention a user]`, 'Gives you the Banner or accent colour of the mentioned user.')
            .addField(`${PREFIX}ID [mention a user]`, 'Gives you the Discord ID of the mentioned user.')
            .addField(`${PREFIX}RID [mention a role]`, 'Gives you the Discord role ID of the mentioned role.')
            .addField(`${PREFIX}CID [mention a channel]`, 'Gives you the Discord channel ID of the mentioned channel.')
            .addField(`${PREFIX}Help`, 'Gives you a list of all the available commands.')
            .addField(`${PREFIX}Explosion`, 'Makes me go offline.')
            .setFooter('Contact Oreniscool#3678 for any questions or issues.')
        message.channel.send({embeds: [utilityEmbed]})
      }
      if(message.content === PREFIX +'help Together' || message.content === PREFIX +'help together' || message.content === PREFIX +'Help Together' || message.content === PREFIX+'Help together') {
       const togetherEmbed = new MessageEmbed()
            .setAuthor('Meguminter help centre','https://images-ext-1.discordapp.net/external/GISf7QHPnhdhIblHze-aJ3xK2CHTv6HjLmemDMOZiSk/%3Fsize%3D512/https/cdn.discordapp.com/avatars/875333807962730496/63e1fbfc096b5a5d0f28bd2d6c36d4d2.webp')
            .setTitle('Discord Together commands')
            .setColor('RANDOM')
            .addField(`${PREFIX}yt [Voice channel ID]`, 'Starts a session of YouTube together in the selected voice channel.')
            .addField(`${PREFIX}chess [Voice channel ID]`, 'Starts a game of Chess in the selected voice channel.')
            .addField(`${PREFIX}poker [Voice channel ID]`, 'Starts a game of Poker in the selected voice channel.')
            .addField(`${PREFIX}betrayal [Voice channel ID]`, 'Starts a game of Betrayal (basically Among us) in the selected voice channel.')
            .addField(`${PREFIX}fishing [Voice channel ID]`, 'Starts a game of Fishington in the selected voice channel.')
            .addField(`${PREFIX}doodle [Voice channel ID]`,'Starts a game of Doodle crew (basically Skribbl.io) in the selected voice channel.')
            .addField(`${PREFIX}wordsnack [Voice channel ID]`, 'Starts a game of Word snacks in the selected voice channel.')
            .addField(`${PREFIX}lettertile [Voice channel ID]`, 'Starts a game of Letter tile in the selected voice channel.')
            .setFooter(`Turn on Developer mode in your settings and right click the channel to copy the ID of the voice channel btw.`)
        message.channel.send({embeds: [togetherEmbed]})
      }
  });


//Babil twerking
client.on('messageCreate', message => {
    if (message.content === PREFIX +'Babil' || message.content === PREFIX +'babil') {
        message.reply('https://media.discordapp.net/attachments/796384999658094653/880151147426500629/dumpy_babil.gif')
    }
});


// Rich mf command
client.on('messageCreate', message => { 
    if (message.content === 'Rich mf' || message.content === 'rich mf' || message.content === 'Rich motherfucker' || message.content === 'rich motherfucker') {
        const richEmbed = ['<@570987316386988033>', '<@327481767651180544>']
        const randRichEmbed = richEmbed[Math.floor(Math.random() * richEmbed.length)];
        message.reply(randRichEmbed+ ' you rich mf') 
    };
});


// Offline command
client.on('messageCreate', message => {
    if (message.content === PREFIX +'Explosion' || message.content === PREFIX +'explosion') { 
        const explosionWarning = new MessageEmbed()
        .setColor('RED') 
        .setTitle('Are you sure you want to do this?')
        .addField("This will stop the entire process that the bot runs on.", "Oreniscool will have to manually turn me on.")
        .setFooter("Click the red button to confirm!")
        const explosionRow = new MessageActionRow()
     .addComponents(
        new MessageButton()
            .setCustomId('Explosion')
            .setLabel('Confirm')
            .setStyle('DANGER'),
     )
        message.reply({embeds: [explosionWarning], components: [explosionRow] });
    };
});


//Cat command
const cats = ["https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg", 
              "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg", 
              "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png", 
              "https://c.tenor.com/uU_kvtDakbcAAAAd/bingus-cat.gif", 
              "https://c.tenor.com/7e8jdLuZmE0AAAAM/heywe-dimden.gif"]
client.on('messageCreate', message => {
    if (message.content === PREFIX +'Pussy' || message.content === PREFIX +'pussy' || message.content === PREFIX +'Cat' || message.content === PREFIX +'cat') {
        const randomcats = cats[Math.floor(Math.random() * cats.length)];
        message.reply(randomcats)
    } 
});

//✪ ω ✪
client.on('messageCreate', message => {
   if (message.content.startsWith('✪ ω ✪')) {
       message.reply('You have invoked Unova\'s wrath.')
   }
});


//IFLAC command
client.on('messageCreate', message => {
    if (message.content === PREFIX +'IFLAC' || message.content === PREFIX +'iflac') {
    const IFLACEmbed = new MessageEmbed()
	.setColor('#FFC0CB')
	.setTitle('I fucking love air conditioning')
	.setThumbnail('https://static.wikia.nocookie.net/omori/images/c/cd/HumphreyBump1.gif/revision/latest/scale-to-width-down/32?cb=20210609004849')
	.setImage('https://i.imgur.com/Lz8vl0W.png')
	.setFooter('and recyling too.');
    message.channel.send({ embeds: [IFLACEmbed] });
    };
 });


 //Edgy statements 
 const edgyLines = ["The darkness of my crescent heart overshadows the darkness of my cruel past.", 
                    "Bath time is the time when I get to explore my deepest sorrows hidden inside the deepest parts of my body.", 
                    "This world knows not my dark side, for it is always trying to light itself up with the sun.", 
                    "This time I bought peda, next time I will bring the FBI.", 
                    "I don't take the drugs, the drugs take me.", 
                    "Making a joke is fun, becoming one isn\'t.", 
                    "Your life is a game, but is it Clash of Clans?", 
                    "Did anyone ask Einstein why the apple fell on his bitch ass head?", 
                    "I wish I could turn myself into a convertable.",
                    "We spend 4 years of our lives learning how to stand and speak and the next 14 being told to shut up and sit down.",
                    "I feel so empty, so goddam empty.", 
                    "My emotional well-being is just like my relationship status; non-existent.",
                    "See I killed someone, I killed the person who used to be me.",
                    "Never say dreams do come true, cause nightmares are dreams too.",
                    "I will die if you leave me, but I will still be with you, lingering as a ghost so you will never be able to leave me.",
                    `My soul is dead,
my heart is broken,
my body can't take it, 
......I'm starting to believe that I am evil`,
                    "I cut myself with Occam\'s razor",
                    "I burnt myself with Newton\'s Flaming Laser Sword.",
                    "I shot myself with Chekhov's gun.",
                    "I can be your angel, or your demon.",
                    `No one knows the depths of my pain.
The world is unaware of its own banality.
I hide my rage behind a mask of sanity. Occasionally, I allow the mask to slip off and show my true self.`,
`Most people wanna tell you what to do \'cause it\'s what they wanna do if they had an opportunity to.
But too scared, that\'s why they live vicariously through you.`,
"I push people away because I don't want to lose anyone else.",
"Maybe soap will clean all of these filthy emotions away.",
"From outside I skrtt skrtt, but from inside I hurtt hurtt.",
"Being rich is not a blessing, fame\'s not a blessing; wasn\'t until I was rich and famous when I learnt that lesson.",
"Life's a blessing or a curse depnding on how you use it, somedays I\'m happy, somedays I\'m fucked up and other days I tell the voice in my head to shut the fuck up!"]
const memeCharacters =['Mahatma Gandhi', 'Sun Tzu, in the Art of War', 'Master Oogway', 'Barack Obama', 'Kermit', 'Waluigi', 'Baby Yoda', 'Mary Sue','Joker', 'Sunny', 'Gaster']
 client.on('messageCreate', async(message) => {
     if (message.content === PREFIX +'edgy' || message.content === PREFIX + 'Edgy') {
      const randEdgyLines = edgyLines[Math.floor(Math.random() * edgyLines.length)];
      const randMemeCharacters = memeCharacters[Math.floor(Math.random() * memeCharacters.length)];
      const randEdgyEmbed = new MessageEmbed()
	   .setColor('RANDOM')
	   .setAuthor('Here\'s your edgy line for the day:', `${message.author.displayAvatarURL({ dynamic: true})}`)
	   .setDescription(`"${randEdgyLines}"`)
       .setFooter(`-${randMemeCharacters}`)
     message.reply({embeds: [randEdgyEmbed] });
     }
 });  


 //Question command 
 const replies = ['Indeed.', 'Yes.', 'No.', 
                  'Never.','No way.', 'Definitely.', 
                  'I dunno.', 'Perhaps.', 'I doubt it.', 
                  'Uhhh....', 'Well....', 'That\'s up for debate.', 
                  'That\'s straight up facts.', 'Not even a question.','Sadly no.',
                  'Ask Oren.', 'I mean......','No freaking way.', 'I don\'t like it so no.', 'Yes please.', 'In your dreams.', 'That\'s like asking if water is wet.', 'That could be the case.', 'Thankfully, yes.', 'I don\'t think that needs an answer.', 'Hate to say it, but no.', 'Hell nah, no way!', 'Oren being straight is more likely than that.']; 
 client.on('messageCreate', message => {
     const args = message.content.slice(PREFIX.length).trim().split(' ')
     const command = args.shift().toLowerCase();
     if(message.content.startsWith(PREFIX +'Ask') || message.content.startsWith(PREFIX +'ask')) {
        const result = replies[Math.floor(Math.random() * replies.length)]; 
        if(!args[0]) return message.reply('Please ask a question for me to respond to!')
        .then(message => {setTimeout(() => message.delete(), 7000)
   })
        const question = args.join(' ')
        const questionEmbed = new Discord.MessageEmbed()
              .setAuthor('Here\'s what I think:')
              .setColor('RANDOM')
              .addField('Question:', question)
              .addField('Answer:', result)
              .setFooter(`Asked by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
        message.reply({embeds: [questionEmbed] });
     }
 });
client.on('messageCreate', message => {
    if(message.content.startsWith(PREFIX+'question')) {
        message.reply('\"%question\" is deprecated, please start using \"%ask\" instead!')
        .then(message => {setTimeout(() => message.delete(), 7000)
   })

    }
})

 //Invite command 
 client.on('messageCreate', message => {
     if (message.content === PREFIX +'Invite' || message.content === PREFIX +'invite') {
         const inviteEmbed = new MessageEmbed()
         .setTitle('Invite me to your server from here!')
         .setColor('RANDOM')
         .setThumbnail('https://cdn.myanimelist.net/images/characters/14/349249.jpg')
         .setDescription('^w^')
         .setURL('https://discord.com/api/oauth2/authorize?client_id=875333807962730496&permissions=240585665600&scope=bot')
         .setFooter("Dunno why you ever would though ¯\\_(ツ)_/¯")
    message.reply({embeds: [inviteEmbed]});
     } 
 });


 //Credits command
 client.on('messageCreate', message => {
     if(message.content === PREFIX +'Credits' || message.content === PREFIX +'credits') {
     const creditsEmbed = new MessageEmbed()
     .setTitle('Credits:')
     .setColor('RANDOM')
     .setAuthor('Meguminter', 'https://images-ext-1.discordapp.net/external/GISf7QHPnhdhIblHze-aJ3xK2CHTv6HjLmemDMOZiSk/%3Fsize%3D512/https/cdn.discordapp.com/avatars/875333807962730496/63e1fbfc096b5a5d0f28bd2d6c36d4d2.webp', 'https://discord.com/api/oauth2/authorize?client_id=875333807962730496&permissions=240585665600&scope=bot')
     .addField('*Lead developer:*',`**Oreniscool**\`#3678\`
                            (Coding and development.)`,true)
     .addField('*Major help:*', `**Tzar**\`#2366\`
             (Helping with issues and lending Misaka\'s source code.)`, true)
     .addField('*Additional help:*', `**levaithan**\`#3348\`
                        (Edgy lines and many your mom jokes.)`, true)
     .addField('*Coded in:*', 'JavaScript', true )
     .addField('*Runtime used:*', 'Node.js v16.6.1', true)
     .addField('*Host:*', 'Replit', true)
     .addField(`*Dependencies:*`, `Discord.js v13.1.0
Express v4.17.1
Axios v0.21.4
Discord-Gamecord v1.1.4
Discord-Together v1.2.0
UptimerRobot`, true)
      const row = new MessageActionRow()
     .addComponents(
        new MessageButton()
            .setCustomId('Oreo')
            .setLabel('Oreniscool')
            .setStyle('SECONDARY'),
        new MessageButton()
            .setCustomId('Palash')
            .setLabel('Tzar')
            .setStyle('SECONDARY'),
        new MessageButton()
            .setCustomId('Barve')
            .setLabel('levaithan')
            .setStyle('SECONDARY'),
        new MessageButton()
            .setCustomId('Baka')
            .setLabel('Misaka')
            .setStyle('SECONDARY'),
        new MessageButton()
            .setCustomId('Replshit')
            .setStyle('DANGER')
            .setLabel('Replit')
     )
    message.reply({embeds: [creditsEmbed], components: [row] });
        }
 });


//Buttons interaction
 client.on('interactionCreate', async (interaction) => {
    if(interaction.isButton()) {
        if(interaction.customId === 'Oreo') {
            const oreoEmbed = new MessageEmbed()
            .setTitle('Oreniscool\`#3678\`')
            .setColor('#d47fb4')
            .setDescription('Professional at being good at nothing and amature coder in JavaScript. Oh yea, also a big nerd.')
            .setThumbnail('https://images-ext-1.discordapp.net/external/XznZw_0USeYQNQwM_Z736SXHe4t1YI5t-7HQ8J4bmmc/%3Fsize%3D512/https/cdn.discordapp.com/avatars/372734613098856448/adaf3202cd0ffb5608827362f4d9089e.webp')
            interaction.channel.send({embeds: [oreoEmbed]})
    }
        else if(interaction.customId === 'Palash') {
            const palashEmbed = new MessageEmbed()
            .setTitle('Tzar\`#2366\`')
            .setColor('#dfff')          
            .setDescription('Professional Among us jokes maker and good at coding in JavaScript, creator of Misaka Discord bot.')
            .setThumbnail('https://images-ext-2.discordapp.net/external/BsX_cuz6XjVdPYJ23y75otREZvGWG4qeIMbH7Uxcepg/%3Fsize%3D512/https/cdn.discordapp.com/avatars/570987316386988033/654dfa9aabd63d238be22389f819a267.webp')
            interaction.channel.send({embeds: [palashEmbed]})
    }
        if(interaction.customId === 'Barve') {
            const barveEmbed = new MessageEmbed()
            .setTitle('levaithan\`#3348\`')
            .setColor('#1a2c58')
            .setDescription('Professional Your Mom jokes maker and good at coding in Python, creator of the Sigma Discord bot.')
            .setThumbnail('https://images-ext-1.discordapp.net/external/8GZxdVGNRo945bhgGr4kH2p-0OgPJhymFIfnCWQXohg/https/images-ext-1.discordapp.net/external/YViQAHhcXGgiq_NifxgZz4AQkqgXgw5bMJoH3LSe8Rs/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/327481767651180544/a_4918c3be8c1f9977372158d463174404.gif')
            interaction.channel.send({embeds: [barveEmbed]})
    }
        if(interaction.customId === 'Baka') {
            const bakaEmbed = new MessageEmbed()
            .setTitle('Misaka\`#0379\`')
            .setColor('#e8a9a1')
            .setDescription('A Discord bot with various features be it fun, utility, moderation and math it can do a number of commands. Made by a bunch of lazy developers.')
            .setThumbnail('https://images-ext-1.discordapp.net/external/btbD17taTeiAEqOpnTy7IRsorVnSIbQtEUd8DKmapAA/%3Fsize%3D512/https/cdn.discordapp.com/avatars/861106912926105610/2e2cc30a5d46a82896e69c7a838d091e.webp')
            .setURL("https://discord.com/oauth2/authorize?client_id=861106912926105610&permissions=8&scope=bot")
            interaction.channel.send({embeds: [bakaEmbed]})
    }
        if(interaction.customId === 'Replshit') {
            const replshitEmbed = new MessageEmbed()
            .setTitle('Replit')
            .setColor('#1abfd9')
            .setDescription('Replit is an IDE and a coding platform that lets you write code and host apps. Being browser based the IDE has frequent issues where suggestions don\'t come up and where it shows a random red underline under syntaxes that are correct making it confusing. It also is stuck on Node.js v12 without an apparent way to update without going through it on 50 different web sites with questionable advice to the mysery of those people trying to make a Discord bot with Discord.js as the latest version requires Node 14 or higher. It has a good server that randomly decides to say frick you in the face and doesn\'t make your bot login for some reason. The only reason it\'s popular is due to it having virtually no competition in the field other than Docker which is way less intuitive and is complicated. And most people go with Repl for small scale projects because of that. Replit helps me get frustrated at 1 am at night. It has a multiplayer feature which is cool I guess. But for all its flaws, it\'s the only dam option if you want to run any bot without running it locally in a terminal window and make your bot eat into your electrical, internet bill and degrade your hardware.')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Repl.it_logo.svg/1200px-Repl.it_logo.svg.png')
            .setURL("https://replit.com")
            interaction.channel.send({embeds: [replshitEmbed]})   
    }
        if(interaction.customId === 'Explosion') {
        const user = client.users.cache.get(interaction.member.user.id);
        const explosionGif = ["https://images-ext-1.discordapp.net/external/gjXvQtaS-Q-tFAjqJMoyxvC6h95nSiF2fSrgIDXz51c/https/c.tenor.com/FLgqf5jyqeMAAAAd/konosuba-explode.gif", "https://c.tenor.com/V6k3KbrycpsAAAAC/anime-explosion.gif",  "https://c.tenor.com/NZhNfPuifwEAAAAd/megumin-explosion.gif"]
        const randexplosionGif = explosionGif[Math.floor(Math.random() * explosionGif.length)];
        const explosionEmbed = new MessageEmbed()
        .setColor('RANDOM') 
        .setTitle('EXPLOSION!!!!!')
        .setImage(randexplosionGif)
        .setFooter("Contact Oreniscool to wake me up.")
        client.users.fetch('372734613098856448').then((user) => {
            user.send(`${interaction.member.user.username} made me tired.`)})
        interaction.channel.send({ embeds: [explosionEmbed]})
        .then(process.exit)
   }   
   }
 });


//Say command
 client.on('messageCreate', message  => {
    if (message.content.startsWith(PREFIX +"say") || message.content.startsWith(PREFIX +"Say")) {   
    const args = message.content.slice(PREFIX.length).trim().split(' ')
    const command = args.shift().toLowerCase();
    const sentence = args.join(' ');
    if(!args[0]) return message.reply('Please give me something to say!')
    .then(message => {setTimeout(() => message.delete(), 7000)
   }) 
    message.channel.send(sentence);
    message.delete().catch(e => {
    return message.reply("(Manage message permissions needed to delete the original message btw)")
        .then(message => {setTimeout(() => message.delete(), 7000)
   }) 
  })
 }
});


//Avatar command
client.on('messageCreate', message => {
    if (message.content === PREFIX +'pfp' || message.content === PREFIX +'PFP' || message.content === PREFIX +'Pfp'){
        const av1Embed = new MessageEmbed()
        .setAuthor('Here\'s your profile picture:', `${message.author.displayAvatarURL({ dynamic: true})}` )
        .setColor('RANDOM')
        .setFooter('Profile picture at '+dformat+'.')
        .setImage(message.author.displayAvatarURL({ dynamic: true}) + "?size=512");
       message.reply({embeds: [av1Embed]});
    }
    else if (message.content.startsWith(PREFIX +'pfp') || message.content.startsWith(PREFIX +'PFP') || message.content.startsWith(PREFIX +'Pfp')){
              const target = message.mentions.users.first();
          if (!target) return message.reply("Please mention a proper user to get an avatar for!")
          .then(message => {setTimeout(() => message.delete(), 7000)
   }) 
          const av2Embed = new MessageEmbed()
          .setAuthor('Here\'s '+ target.username +'\'s profile picture:', `${target.displayAvatarURL({ dynamic: true})}`)
          .setColor('RANDOM')
          .setFooter('Profile picture at '+dformat+'.')
          .setImage(target.displayAvatarURL({ dynamic: true}) + "?size=512");
        message.reply({embeds: [av2Embed]});
    }
});


//ID command 
client.on('messageCreate', message => {
    //User ID
    if (message.content === PREFIX + 'Id' || message.content === PREFIX +'id' || message.content === PREFIX +'ID') {
        const id1Embed = new MessageEmbed()
      .setAuthor('Here\'s your Discord ID:', `${message.author.displayAvatarURL({ dynamic: true})}`)
      .setColor('RANDOM')
      .setDescription(message.author.id)
     message.reply({embeds: [id1Embed]});
    }
    else if (message.content.startsWith(PREFIX + 'Id') || message.content.startsWith(PREFIX +'id') || message.content.startsWith(PREFIX +'ID')) {
    const target = message.mentions.users.first();
        if (!target) return message.reply('Please mention a proper user to get the ID of!')
         .then(message => {setTimeout(() => message.delete(), 7000)
   }) 
    const id2Embed = new MessageEmbed()
     .setAuthor(target.username +'\'s Discord ID:', `${target.displayAvatarURL({ dynamic: true})}`)
     .setColor('RANDOM')
     .setDescription(target.id)
    message.reply({embeds: [id2Embed]});
    }
    //Role ID
    if (message.content.startsWith(PREFIX +'roleId') || message.content.startsWith(PREFIX +'roleid') || message.content.startsWith(PREFIX +'rid') || message.content.startsWith(PREFIX +'RID') || message.content.startsWith(PREFIX +'RoleID') || message.content.startsWith(PREFIX +'Roleid')) {
         const roletarget = message.mentions.roles.first();
      if (!roletarget) return message.reply('Please mention a proper role to get the ID of!')
      .then(message => {setTimeout(() => message.delete(), 7000)
   }) 
      const idroleEmbed = new MessageEmbed()
      .setAuthor('Here\'s '+roletarget.name+'\'s Discord ID:')
      .setColor('RANDOM')
      .setDescription(roletarget.id)
     message.reply({embeds: [idroleEmbed]});
    }
    //Channel ID
    if (message.content.startsWith(PREFIX +'channelID') || message.content === PREFIX +'channelid' || message.content === PREFIX +'cid' || message.content === PREFIX +'CID' || message.content === PREFIX +'ChannelID' || message.content === PREFIX +'Channelid') {
        const idchannel1Embed = new MessageEmbed()
        .setAuthor('Here\'s #'+message.channel.name+'\'s Discord ID:',)
        .setColor('RANDOM')
        .setDescription(message.channel.id)
       message.reply({embeds: [idchannel1Embed]})
    }
    else if (message.content.startsWith(PREFIX +'channelID') || message.content.startsWith(PREFIX +'channelid') || message.content.startsWith(PREFIX +'cid') || message.content.startsWith(PREFIX +'CID') || message.content.startsWith(PREFIX +'ChannelID') || message.content.startsWith(PREFIX +'Channelid')) {
        const channeltarget = message.mentions.channels.first();
     if (!channeltarget) return message.reply('Please mention a proper channel to get the ID of!')
     .then(message => {setTimeout(() => message.delete(), 7000)
   }) 
     const idchanne2Embed = new MessageEmbed()
     .setAuthor('Here\'s #'+channeltarget.name+'\'s Discord ID:')
     .setColor('RANDOM')
     .setDescription(channeltarget.id)
    message.reply({embeds: [idchanne2Embed]});
    }
});


//Howgay command
client.on('messageCreate', message => {
if (message.content === PREFIX+'howgay' || message.content === PREFIX+'Howgay') {
      const target = message.mentions.members.first();
      let gaypercent = [Math.floor(Math.random() * 100)];  
      if (!target) {
      const gay1Embed = new MessageEmbed()
      .setAuthor(`Here's your Gay percentage:`, `${message.author.displayAvatarURL({ dynamic: true})}`)
      .setColor('RANDOM')
      .setDescription(message.author.username + ' is '+ gaypercent +'% gay! 🌈');
      message.reply({embeds: [gay1Embed]})
      };
    }
    else if (message.content.startsWith(PREFIX + 'howgay') || message.content.startsWith(PREFIX +'Howgay')) {
        const target = message.mentions.users.first();
        let gaypercent = [Math.floor(Math.random() * 100)];
     if (!target) return message.reply('Please mention a proper user to get the Gay percentage of!')
     .then(message => {setTimeout(() => message.delete(), 7000)
   }) 
     const gay2Embed = new MessageEmbed()
     .setAuthor(target.username +'\'s Gay percentage:', `${target.displayAvatarURL({ dynamic: true})}`)
     .setColor('RANDOM')
     .setDescription(target.username + ' is '+ gaypercent +'% gay! 🌈')
   message.reply({embeds: [gay2Embed]})
    }
  });


  //Howbased command 
client.on('messageCreate', message => {
    if (message.content === PREFIX +'howbased' || message.content === PREFIX +'Howbased'){
      const target = message.mentions.members.first();
      let basedpercent = [Math.floor(Math.random() * 100)];  
      if (!target) {
      const based1Embed = new MessageEmbed()
      .setAuthor(`Here's your Based percentage:`, `${message.author.displayAvatarURL({ dynamic: true})}`)
      .setColor('RANDOM')
      .setDescription(message.author.username + ' is '+ basedpercent +'% based! 📠');
      message.reply({embeds: [based1Embed]})
      };
    }
    else if (message.content.startsWith(PREFIX + 'howbased') || message.content.startsWith(PREFIX +'Howbased')) {
        const target = message.mentions.users.first();
        let basedpercent = [Math.floor(Math.random() * 100)];
     if (!target) return message.reply('Please mention a proper user to get the Based percentage of!')
     .then(message => {setTimeout(() => message.delete(), 7000)
   }) 
     const based2Embed = new MessageEmbed()
     .setAuthor(target.username +'\'s Based percentage:', `${target.displayAvatarURL({ dynamic: true})}`)
     .setColor('RANDOM')
     .setDescription(target.username + ' is '+ basedpercent +'% based! 📠')
     message.reply({embeds: [based2Embed]})
    }
  });


//Urban dictionary 
client.on('messageCreate', async(message) => {
  const args = message.content.slice(PREFIX.length).trim().split(' ');
  const command = args.shift().toLowerCase();
try {
  if (message.content.startsWith(PREFIX+"urban") || message.content.startsWith(PREFIX+"ud") || message.content.startsWith(PREFIX+"UD") || message.content.startsWith(PREFIX+"Ud")) {
  let query = args.join(" ")
  if (!query) {
    return message.reply("Please specify a word to search for.")
    .then(message => {setTimeout(() => message.delete(), 7000)
   }) 
  }
  let link = "https://api.urbandictionary.com/v0/define?term=";
  let fetch = await axios("https://api.urbandictionary.com/v0/define?term="+query);
  fetch = fetch.data.list;
  if (fetch.length === 0) {
    return message.reply("I was unable to find your word f.")
    .then(message => {setTimeout(() => message.delete(), 7000)
   }) 
  }

  let data = fetch[0];
  let definition = data.definition;
  let example = data.example;
  let permalink = data.permalink;
  let thumbsup = data.thumbs_up;
  let thumbsdown = data.thumbs_down;
  let word = data.word;
  let time = data.written_on;

  definition = definition.length >= 1024 ? definition.slice(0, 1020) + "..." : definition;
  example = example.length>= 1024 ? example.slice(0, 1020) + "..." : example;
  const noEgUdEmbed = new Discord.MessageEmbed()
  .setTitle(word)
  .setURL(permalink)
  .setColor('RANDOM')
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/UD_logo-01.svg/768px-UD_logo-01.svg.png")
  .addField("Definition: ", definition, false)
  .addField(`🔼 : ${thumbsup}`, `🔽 **: ${thumbsdown}**`)
  .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
   if(!example) return message.channel.send({embeds: [noEgUdEmbed]})
  const udEmbed = new Discord.MessageEmbed()
  .setTitle(word)
  .setURL(permalink)
  .setColor('RANDOM')
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/UD_logo-01.svg/768px-UD_logo-01.svg.png")
  .addField("Definition: ", definition, false)
  .addField("Example:", example, false)
  .addField(`🔼 : ${thumbsup}`, `🔽 **: ${thumbsdown}**`)
  .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
  message.channel.send({ embeds: [udEmbed] })
  }}
catch (error) {
message.reply("I ran into an error trying to find that word :P")
    .then(message => {setTimeout(() => message.delete(), 7000)})
}
});


// Shipscore
client.on('messageCreate', async(message) => {
const args = message.content.slice(PREFIX.length).trim().split(' ');
   const command = args.shift().toLowerCase();
if (message.content.startsWith(PREFIX+'shipscore') || message.content.startsWith(PREFIX+'ship') || message.content.startsWith(PREFIX+'Shipscore') || message.content.startsWith(PREFIX+'Ship')) {
  let firstPerson = args[0]; 
  let secondPerson = args[1]; 
  let RN = [Math.floor(Math.random() * 100)]; 
  if(!args[0]) return message.reply('Please specify two values to be shipped!')
  .then(message => {setTimeout(() => message.delete(), 7000)
   }) 
  if(!args[1]) return message.reply('Please specify a second value for the first value to be shipped with!')
  .then(message => {setTimeout(() => message.delete(), 7000)
   }) 
  let argsSliced1 = firstPerson.slice(0, firstPerson.length / 2)
  let argsSliced2 = secondPerson.slice(secondPerson.length / 2) 
  if (firstPerson && secondPerson) { 
    const badshipLines = ["As good as being incompatible with each other.", "Yea..... no.", "Ew, please no.", "You kidding me?"]
    const randbadshipLines = badshipLines[Math.floor(Math.random() * badshipLines.length)]; 
  	const badshipEmbed = new MessageEmbed()
      .setTitle(`Here\'s the ship score, and yikes. `)
      .setColor('RANDOM')
      .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Broken_heart_SVG.svg/1200px-Broken_heart_SVG.svg.png`)
      .addField(`${firstPerson} ✕ ${secondPerson} on the ship meter is ${RN}%`, `${randbadshipLines}`)
      .addField(`Ship name:`, `${firstPerson} ✕ ${secondPerson} = ${argsSliced1}${argsSliced2}`)

    const mehshipLines = ["Eh, kinda works?", "It\'s a meh, put possible.", "I doubt it." ]
    const randmehshipLines = mehshipLines[Math.floor(Math.random() * mehshipLines.length)]; 
    const mehshipEmbed = new MessageEmbed()
      .setTitle(`Here\'s the ship score: `)
      .setColor('RANDOM')
      .setThumbnail(`https://media.discordapp.net/attachments/860812396788711424/883701702434386000/beautiful-icon-of-broken-heart-vector-vector-id917888768.png`)
      .addField(`${firstPerson} ✕ ${secondPerson} on the ship meter is ${RN}%`, `${randmehshipLines}`)
      .addField(`Ship name:`, `${firstPerson} ✕ ${secondPerson} = ${argsSliced1}${argsSliced2}`)

    const goodshipLines = ["It\'s pretty good, ngl.", "Nice, I like it.", "Pretty likely."]
    const randgoodshipLines = goodshipLines[Math.floor(Math.random() * goodshipLines.length)]; 
    const goodshipEmbed = new MessageEmbed()
      .setTitle(`Here\'s the ship score: `)
      .setColor('RANDOM')
      .setThumbnail(`https://media.discordapp.net/attachments/860812396788711424/883701699875840070/1374263500000-XXX-IMG-HEART-SHAPEJPG-1-1-F836NUSQ-1307191553_4_3.png`)
      .addField(`${firstPerson} ✕ ${secondPerson} on the ship meter is ${RN}%`, `${randgoodshipLines}`) 
      .addField(`Ship name:`, `${firstPerson} ✕ ${secondPerson} = ${argsSliced1}${argsSliced2}`)

    const epicshipLines = ["It\'s a match made in heaven.", "They are perfect for each other.", "Meant to be together.", "Eternally together."]
    const randepicshipLines = epicshipLines[Math.floor(Math.random() * epicshipLines.length)]; 
    const epicshipEmbed = new MessageEmbed()
      .setTitle(`Here\'s the ship score: `)
      .setColor('RANDOM')
      .setThumbnail(`https://media.discordapp.net/attachments/860812396788711424/883073340053553183/unknown.png`)
      .addField(`${firstPerson} ✕ ${secondPerson} on the ship meter is ${RN}%`, `${randepicshipLines} 👀`)
      .addField(`Ship name:`, `${firstPerson} ✕ ${secondPerson} = ${argsSliced1}${argsSliced2}`)

    const sixnineshipEmbed = new MessageEmbed()
      .setTitle(`Here\'s the ship score, and oh boi. `)
      .setColor('RANDOM')
      .setThumbnail(`https://media.discordapp.net/attachments/860812396788711424/883264620062728232/i35ikn7.png`)
      .addField(`${firstPerson} ✕ ${secondPerson} on the ship meter is ${RN}%`, 'This is just perfect.💖')
      .addField(`Ship name:`, `${firstPerson} ✕ ${secondPerson} = ${argsSliced1}${argsSliced2}`)
      .setFooter('Haha funny number, btw you\'re a Nasir, you won a 1/100.')  


    if (RN > -1 && RN < 26) { 
        message.reply({embeds: [badshipEmbed]})
    }
    if (RN > 25 && RN < 51) {
        message.reply({embeds: [mehshipEmbed]})
    }
    if (RN > 50 && RN < 69 || RN > 69 && RN < 76){
        message.reply({embeds: [goodshipEmbed]})
    }
    if (RN > 68 && RN < 70 ) {
        message.reply({embeds: [sixnineshipEmbed]})
    }
    if (RN > 75 && RN < 101) {
        message.reply({embeds: [epicshipEmbed]})
    }
   }
  }
});


//Rps command 
client.on('messageCreate', async(message) => {
   const args = message.content.slice(PREFIX.length).trim().split(' ');
   const command = args.shift().toLowerCase();
    if (message.content.startsWith(PREFIX+'rps') || message.content.startsWith(PREFIX+'Rps')) {
        let rock = "1";
        let paper = "2";
        let scissors = "3";
        let rpsArray = [rock, paper, scissors]
        let botAnswer = rpsArray[Math.floor(Math.random() * rpsArray.length)];
        if(!args[0]) return message.reply('Please input either \"rock\", \"paper\" or \"scissors\"!')
        .then(message => {setTimeout(() => message.delete(), 7000)
   }) 
        if( args[0] === 'rock' || args[0] === 'r' || args[0] === '🪨') {
            if(botAnswer === "1") {
                message.reply("I picked rock 🪨")
            .then(message => {
            setTimeout(function() {
                message.channel.send("It's a tie!!")
            }, 200);
             })
            }
            if(botAnswer === "2") {
                message.reply("I picked paper 📃")
                .then(message => {
                setTimeout(function() {
                    message.channel.send("YOU LOSE NOOB!!")
                }, 200);
                })
            }if(botAnswer === "3") {
                message.reply("I picked scissors ✂️")
                .then(message => {
                setTimeout(function() {
                    message.channel.send("GODDAMIT, YOU WIN!!")
                }, 200);
                })}
        }if(args[0] === 'paper' || args[0] === 'p' || args[0] === '📃') {
            if(botAnswer === "1") {
                message.reply("I picked rock 🪨")
            .then(message => {
            setTimeout(function() {
                message.channel.send("GODDAMIT, YOU WIN!!")
            }, 200);
             })
            }if(botAnswer === "2") {
                message.reply("I picked paper 📃")
                .then(message => {
                setTimeout(function() {
                    message.channel.send("It's a tie!!")
                }, 200);
                })
            }if(botAnswer === "3") {
                message.reply("I picked scissors✂️")
                .then(message => {
                setTimeout(function() {
                    message.channel.send("You LOSE NOOB!!")
                }, 200);
                })}
        }if(args[0] === 'scissors' || args[0] === 's' || args[0] === '✂️') {
            if(botAnswer === "1") {
                message.channel.send("I picked rock 🪨")
            .then(message => {
            setTimeout(function() {
                message.reply("You LOSE NOOB!!")
            }, 200);
             })
            }if(botAnswer === "2") {
                message.reply("I picked paper 📃")
                .then(message => {
                setTimeout(function() {
                    message.channel.send("GODDAMIT, YOU WIN!!")
                }, 200);
                })
            }if(botAnswer === "3") {
                message.reply("I picked scissors ✂️")
                .then(message => {
                setTimeout(function() {
                    message.channel.send("It's a tie!!")
                }, 200);
                })
          }
        }if(args[0] === 'deez' && args[1] === 'nuts' || args[0] === 'Deez' && args[1] === 'nuts') {
            message.reply('I picked scissors✂️!!!')
            .then(message => {
                setTimeout(function() {
                    message.channel.send("Time to get neutered! :)")
                }, 200);
             })
        }
     }
});


//Snake game 
client.on('messageCreate', async (message) => {
  if(message.content === PREFIX+'snake' | message.content === PREFIX+'Snake') {
    new Snake({
      message: message,
      embed: {
        title: 'Snake Game',
	color: 'RANDOM',
	OverTitle: "Game Over, noob.",
      },
      snake: { head: '🟠', body: '🟥', tail: '🔴' },
      emojis: {
        board: '⬛', 
        food: '🥭',
        up: '🔼', 
        down: '🔽',
	    right: '▶️',
	    left: '◀️',
      }
    }).startGame();
  }
});


//Banner command 
client.on('messageCreate', async(message) => {
    const args = message.content.slice(PREFIX.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if(message.content === PREFIX+'Banner' || message.content === PREFIX+'banner') {
    const user = message.author
    axios.get(`https://discord.com/api/users/${user.id}`, {
        headers: {
                  Authorization: `Bot ${process.env.TOKEN}`
        }
    })
    .then((res) => {
        const { banner, accent_color } = res.data;
             if(banner && accent_color) {
             const extension = banner.startsWith("a_") ? '.gif' : '.png';
             const url =  `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}`;
             hexString = accent_color.toString(16);
             const banneraEmbed = new MessageEmbed()
             .setAuthor(`Here\'s your banner:`, `${message.author.displayAvatarURL({ dynamic: true})}`)
             .setColor(hexString)
             .setImage(url + "?size=2048")
             .setFooter(`You also seem to have an accent colour, so here it is in Hex: #${hexString}`)
             message.reply({embeds: [banneraEmbed]})
         }
            if(banner && !accent_color) {
             const extension = banner.startsWith("a_") ? '.gif' : '.png';
             const url =  `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}`;
             const bannerEmbed = new MessageEmbed()
             .setAuthor(`Here\'s your banner:`, `${message.author.displayAvatarURL({ dynamic: true})}`)
             .setColor(`RANDOM`)
             .setImage(url + "?size=2048")
             message.reply({embeds: [bannerEmbed]})
         } 
            if (!banner && accent_color) {
                hexString = accent_color.toString(16);
                const accentEmbed = new MessageEmbed()
                .setAuthor(`Here\'s your accent colour:`, `${message.author.displayAvatarURL({ dynamic: true})}`)
                .setDescription(`You don\'t seem to have a banner, so here\'s your accent colour,`)
                .addField(`<----`, `Colour in Hex: \`#${hexString}\``)
                .setColor(accent_color)
                message.reply({embeds: [accentEmbed]})
         }
         else if (!banner && !accent_color) {
             message.reply(`${message.author.username}, I can\'t display your accent colour as it was automatically set by Discord and you don\'t have a Banner.`)
         .then(message => {setTimeout(() => message.delete(), 10000)
         });
     }})
    }
    else if(message.content.startsWith(PREFIX+'Banner') || message.content.startsWith(PREFIX+'banner')) {
    const user = message.mentions.members.first() ||
                 message.guild.members.cache.get(args[0]);
    if (!user) return message.reply("Please specify a user to get the banner or accent colour of!")
    .then(message => {setTimeout(() => message.delete(), 7000)
    });

    axios.get(`https://discord.com/api/users/${user.id}`, {
        headers: {
                  Authorization: `Bot ${process.env.TOKEN}`
        }
    })
    .then((res) => {
        const { banner, accent_color } = res.data;
        if (banner && accent_color) {
             const extension = banner.startsWith("a_") ? '.gif' : '.png';
             const url =  `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}`;
             hexString = accent_color.toString(16);
             const banneraEmbed = new MessageEmbed()
             .setAuthor(`Here\'s ${user.user.username}'s banner:`, `${user.user.displayAvatarURL({ dynamic: true})}`)
             .setColor(accent_color)
             .setImage(url + "?size=2048")
             .setFooter(`They also seem to have an accent colour, here it is in Hex: #${hexString}`)
             message.reply({embeds: [banneraEmbed]})
         }
        if (banner && !accent_color) {
             const extension = banner.startsWith("a_") ? '.gif' : '.png';
             const url =  `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}`;
             const bannerEmbed = new MessageEmbed()
             .setAuthor(`Here\'s ${user.user.username}'s banner:`, `${user.user.displayAvatarURL({ dynamic: true})}`)
             .setColor(`RANDOM`)
             .setImage(url + "?size=2048")
             message.reply({embeds: [bannerEmbed]})
         } 
        if (!banner && accent_color) {
                hexString = accent_color.toString(16);
                const accentEmbed = new MessageEmbed()
                .setAuthor(`Here\'s ${user.user.username}'s accent colour:`, `${user.user.displayAvatarURL({ dynamic: true})}`)
                .setDescription(`They don\'t seem to have a banner, so here\'s their accent colour,`)
                .addField(`<----`, `Colour in Hex: \`#${hexString}\``)
                .setColor(accent_color)
                message.reply({embeds: [accentEmbed]})
         }
        else if (!banner && !accent_color) {
             message.reply(`I can\'t display ${user.user.username}\'s accent colour as it was automatically set by Discord and they don\'t have a Banner.`)
         .then(message => {setTimeout(() => message.delete(), 10000)
         });
     }})
    }
});


//purge command
client.on('messageCreate', async(message)=> {
if (message.content.startsWith(PREFIX+"Purge") || message.content.startsWith(PREFIX+"purge")) {
 if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
    message.reply('I have insufficent permissions to delete messages!')} 
 else if (message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) { 
const args = message.content.split(' ').slice(1); 
const amount = args.join(' '); 

if (!amount) return message.reply('Please mention a valid amount!');
if (isNaN(amount)) return message.reply('Please mention a valid amount!'); 

if (amount > 99) return message.reply('You can\'t delete more than 100 messages at once!'); 
if (amount < 1) return message.reply('You have to delete at least 1 message!'); 

var amount1 = parseFloat(amount);
var amount2 = (amount1 + 1)

await message.channel.messages.fetch({ limit: amount2 }).then(messages => { 
    message.channel.bulkDelete(messages).catch(e => {
    return message.reply("Messages older than 14 days cannot be deleted due to limitations of the Discord API.")
        .then(message => {setTimeout(() => message.delete(), 7000)
    }) 
  })
});
const purgeEmbed = new MessageEmbed()
.setColor('RANDOM')
.setAuthor('Messages Purged', `${message.author.displayAvatarURL({ dynamic: true})}`)
.setDescription(`**${message.author.username}** purged **${amount}** messages in ${message.channel}`)
message.channel.send({embeds: [purgeEmbed]})
}

else if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
  message.reply('You have insufficent permissions to use this command.')
   };
 }
});


//Discord together
client.discordTogether = new DiscordTogether(client);
client.on('messageCreate', async message => { 
        try { if (message.content.startsWith(PREFIX+'yt')) {
            const channel = message.mentions.channels.first();
            const args = message.content.slice(PREFIX.length).trim().split(' ');
            const command = args.shift().toLowerCase();
            if (!args[0] || isNaN(args[0]) || args[0].length !== 18 || channel) {message.reply('Please provide the ID of an appropriate voice channel!')
                           .then(message => {setTimeout(() => message.delete(), 7000)
                             })
                          }
            else {client.discordTogether.createTogetherCode(args[0], 'youtube').then(async invite => {
             const yttEmbed = new MessageEmbed()
             .setColor('#FF0000')
             .setTitle('YouTube Together')
             .setThumbnail('https://images-ext-2.discordapp.net/external/lNfJwW_ErvUpz83CiX03DU5nTBW0Vj8hb40v54lRvLI/https/i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png?width=663&height=663')
             .setDescription(`Click on this [link](${invite.code}) or the button to open a session of YouTube together in the voice channel you selected!`)
              const row = new MessageActionRow()
              .addComponents(
              new MessageButton()
               .setLabel('Watch Together')
               .setStyle('LINK')
               .setURL(invite.code)
            ) 
             message.reply({embeds: [yttEmbed], components: [row]})
         });
       }
    }}
    catch (error) {
    message.reply("I ran into an error trying to find that channel")
    .then(message => {setTimeout(() => message.delete(), 7000)})
    }
});
client.discordTogether = new DiscordTogether(client);
client.on('messageCreate', async message => { 
        try {if (message.content.startsWith(PREFIX+'chess')) {
            const channel = message.mentions.channels.first();
            const args = message.content.slice(PREFIX.length).trim().split(' ');
            const command = args.shift().toLowerCase();
            if (!args[0] || isNaN(args[0]) || args[0].length !== 18 || channel) {message.reply('Please provide the ID of an appropriate voice channel!')
                           .then(message => {setTimeout(() => message.delete(), 7000)
                             })
                          }
             else {client.discordTogether.createTogetherCode(args[0], 'chess').then(async invite => {
             const chessEmbed = new MessageEmbed()
             .setColor('#00FF00')
             .setTitle('Chess in the park')
             .setThumbnail('https://support.discord.com/hc/article_attachments/4404615637015/chess_banner.png')
             .setDescription(`Click on this [link](${invite.code}) or the button to open a session of Chess in the park in the voice channel you selected!`)
              const row = new MessageActionRow()
              .addComponents(
              new MessageButton()
               .setLabel('Start a game of chess')
               .setStyle('LINK')
               .setURL(invite.code)
            ) 
             message.reply({embeds: [chessEmbed], components: [row]})
        });
      }
    }}
    catch (error) {
    message.reply("I ran into an error trying to find that channel")
    .then(message => {setTimeout(() => message.delete(), 7000)})
    }
});
client.discordTogether = new DiscordTogether(client);
client.on('messageCreate', async message => { 
        try {if (message.content.startsWith(PREFIX+'poker')) {
            const channel = message.mentions.channels.first();
            const args = message.content.slice(PREFIX.length).trim().split(' ');
            const command = args.shift().toLowerCase();
            if (!args[0] || isNaN(args[0]) || args[0].length !== 18 || channel) {message.reply('Please provide the ID of an appropriate voice channel!')
                           .then(message => {setTimeout(() => message.delete(), 7000)
                             })
                          }
            else {client.discordTogether.createTogetherCode(args[0], 'poker').then(async invite => {
             const pokerEmbed = new MessageEmbed()
             .setColor('#800080')
             .setTitle('Discord Poker')
             .setThumbnail('https://media.discordapp.net/attachments/837243102636015649/891065730366341180/unknown.png')
             .setDescription(`Click on this [link](${invite.code}) or the button to start a game of Discord Poker in the voice channel you selected!`)
             .setFooter('Please note that you will have to consent to being 18+ years old to play this game.')
              const row = new MessageActionRow()
              .addComponents(
              new MessageButton()
               .setLabel('Start a game')
               .setStyle('LINK')
               .setURL(invite.code)
            ) 
             message.reply({embeds: [pokerEmbed], components: [row]})
        });
      }
    }}
    catch (error) {
    message.reply("I ran into an error trying to find that channel")
    .then(message => {setTimeout(() => message.delete(), 7000)})
    }
}); 
client.discordTogether = new DiscordTogether(client);
client.on('messageCreate', async message => { 
        try {if (message.content.startsWith(PREFIX+'doodle')) {
            const channel = message.mentions.channels.first();
            const args = message.content.slice(PREFIX.length).trim().split(' ');
            const command = args.shift().toLowerCase();
            if (!args[0] || isNaN(args[0]) || args[0].length !== 18 || channel) {message.reply('Please provide the ID of an appropriate voice channel!')
                           .then(message => {setTimeout(() => message.delete(), 7000)
                             })
                          }
            else {client.discordTogether.createTogetherCode(args[0], 'doodlecrew').then(async invite => {
             const doodleEmbed = new MessageEmbed()
             .setColor ('#E8BEAC')
             .setTitle('Discord Doodle crew')
             .setThumbnail('https://media.discordapp.net/attachments/837243102636015649/892856690754613298/unknown.png?width=1180&height=663')
             .setDescription(`Click on this [link](${invite.code}) or the button to start a game of Discord Doodle crew in the voice channel you selected!`)
              const row = new MessageActionRow()
              .addComponents(
              new MessageButton()
               .setLabel('Start a game')
               .setStyle('LINK')
               .setURL(invite.code)
            ) 
             message.reply({embeds: [doodleEmbed], components: [row]})
        });
      }
    }}
    catch (error) {
    message.reply("I ran into an error trying to find that channel")
    .then(message => {setTimeout(() => message.delete(), 7000)})
    }
});
client.discordTogether = new DiscordTogether(client);
client.on('messageCreate', async message => { 
        try {if (message.content.startsWith(PREFIX+'wordsnack')) {
            const channel = message.mentions.channels.first();
            const args = message.content.slice(PREFIX.length).trim().split(' ');
            const command = args.shift().toLowerCase();
            if (!args[0] || isNaN(args[0]) || args[0].length !== 18 || channel) {message.reply('Please provide the ID of an appropriate voice channel!')
                           .then(message => {setTimeout(() => message.delete(), 7000)
                             })
                          }
             else {client.discordTogether.createTogetherCode(args[0], 'wordsnack').then(async invite => {
             const wordsnackEmbed = new MessageEmbed()
             .setColor('#FFFF00')
             .setTitle('Word snack')
             .setThumbnail('https://media.discordapp.net/attachments/837243102636015649/892859158620147742/unknown.png')
             .setDescription(`Click on this [link](${invite.code}) or the button to open a session of word snack in the voice channel you selected!`)
              const row = new MessageActionRow()
              .addComponents(
              new MessageButton()
               .setLabel('Start a game')
               .setStyle('LINK')
               .setURL(invite.code)
            ) 
             message.reply({embeds: [wordsnackEmbed], components: [row]})
        });
      }
    }}
    catch (error) {
    message.reply("I ran into an error trying to find that channel")
    .then(message => {setTimeout(() => message.delete(), 7000)})
    }
});
client.discordTogether = new DiscordTogether(client);
client.on('messageCreate', async message => { 
        try {if (message.content.startsWith(PREFIX+'lettertile')) {
            const channel = message.mentions.channels.first();
            const args = message.content.slice(PREFIX.length).trim().split(' ');
            const command = args.shift().toLowerCase();
            if (!args[0] || isNaN(args[0]) || args[0].length !== 18 || channel) {message.reply('Please provide the ID of an appropriate voice channel!')
                           .then(message => {setTimeout(() => message.delete(), 7000)
                             })
                          }
             else {client.discordTogether.createTogetherCode(args[0], 'lettertile').then(async invite => {
             const lettertileEmbed = new MessageEmbed()
             .setColor('#800080')
             .setTitle('Letter Tile')
             .setThumbnail('https://media.discordapp.net/attachments/837243102636015649/892861279868440646/unknown.png')
             .setDescription(`Click on this [link](${invite.code}) or the button to open a session of letter tile in the voice channel you selected!`)
              const row = new MessageActionRow()
              .addComponents(
              new MessageButton()
               .setLabel('Start a game')
               .setStyle('LINK')
               .setURL(invite.code)
            ) 
             message.reply({embeds: [lettertileEmbed], components: [row]})
        });
      }
    }}
    catch (error) {
    message.reply("I ran into an error trying to find that channel")
    .then(message => {setTimeout(() => message.delete(), 7000)})
    }
});
client.discordTogether = new DiscordTogether(client);
client.on('messageCreate', async message => { 
        try {if (message.content.startsWith(PREFIX+'betrayal')) {
            const channel = message.mentions.channels.first();
            const args = message.content.slice(PREFIX.length).trim().split(' ');
            const command = args.shift().toLowerCase();
            if (!args[0] || isNaN(args[0]) || args[0].length !== 18 || channel) {message.reply('Please provide the ID of an appropriate voice channel!')
                           .then(message => {setTimeout(() => message.delete(), 7000)
                             })
                          }
             else {client.discordTogether.createTogetherCode(args[0], 'betrayal').then(async invite => {
             const betrayalEmbed = new MessageEmbed()
             .setColor('#FFFF00')
             .setTitle('Betrayal')
             .setThumbnail('https://media.discordapp.net/attachments/861670034208194630/892862273121550396/unknown.png')
             .setDescription(`Click on this [link](${invite.code}) or the button to open a session of Betrayal in the voice channel you selected!`)
              const row = new MessageActionRow()
              .addComponents(
              new MessageButton()
               .setLabel('Start a game')
               .setStyle('LINK')
               .setURL(invite.code)
            ) 
             message.reply({embeds: [betrayalEmbed], components: [row]})
        });
      }
    }}
    catch (error) {
    message.reply("I ran into an error trying to find that channel")
    .then(message => {setTimeout(() => message.delete(), 7000)})
    }
});
client.discordTogether = new DiscordTogether(client);
client.on('messageCreate', async message => { 
        try {if (message.content.startsWith(PREFIX+'fishing')) {
            const channel = message.mentions.channels.first();
            const args = message.content.slice(PREFIX.length).trim().split(' ');
            const command = args.shift().toLowerCase();
            if (!args[0] || isNaN(args[0]) || args[0].length !== 18 || channel) {message.reply('Please provide the ID of an appropriate voice channel!')
                           .then(message => {setTimeout(() => message.delete(), 7000)
                             })
                          }
             else {client.discordTogether.createTogetherCode(args[0], 'fishing').then(async invite => {
             const fishingEmbed = new MessageEmbed()
             .setColor('#0000FF')
             .setTitle('Fishington')
             .setThumbnail('https://media.discordapp.net/attachments/861670034208194630/892864868246491196/unknown.png')
             .setDescription(`Click on this [link](${invite.code}) or the button to open a session of Fishington in the voice channel you selected!`)
              const row = new MessageActionRow()
              .addComponents(
              new MessageButton()
               .setLabel('Start a game')
               .setStyle('LINK')
               .setURL(invite.code)
            ) 
             message.reply({embeds: [fishingEmbed], components: [row]})
        });
      }
    }}
    catch (error) {
    message.reply("I ran into an error trying to find that channel")
    .then(message => {setTimeout(() => message.delete(), 7000)})
    }
});

client.on('messageCreate', async(message) => {
    if (message.content === PREFIX+'servers') {
        client.guilds.cache.forEach((guild) => {
            console.log(guild)
    })
        message.reply(`I am currently in ${client.guilds.cache.size} servers!`)
    }
}); 
//Login/final statement
client.login(process.env.TOKEN);
