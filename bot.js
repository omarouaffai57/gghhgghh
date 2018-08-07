const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '^'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`7MooDY&LeNarD`,"http://twitch.tv/lenerdyt")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});






client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["300972049847943169"];
if (message.content.startsWith(prefix + 'owrbot')) {
    if(!message.channel.guild) return;
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage("**انت صاحب البوت **")
} else {
   message.reply("**انت لست صاحب البوت  صاحب الوت هو @LeNerd#6264 **");   
}
}
});   




client.on('message', message => {
    if (message.content.startsWith("^bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});



client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('^bcall')){
 if (message.author.id !== '300972049847943169') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '300972049847943169') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});





client.login(process.env.BOT_TOKEN);
