const Discord = require("discord.js");
const client = new Discord.Client();


client.login(process.env.TOKEN);



client.on('message', message => {
    if (message.content === '$Begin ASS') {
        message.channel.send('^^ass')
    }
    
});
/*
client.on('message', message => {
    if (message.content === '$Begin Daily') {
        message.channel.send('Loading Daily . . .')
        var i = 1;
        var myin = setInterval(function fun() {
            message.channel.send('$d' + i)
            i++;
            if (i == 404) {
                clearInterval(myin)
            }
        }, 20000)

    }
});
*/