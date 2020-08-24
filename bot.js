const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);
client7.login(process.env.TOKEN7);
client8.login(process.env.TOKEN8);
client9.login(process.env.TOKEN9);
client10.login(process.env.TOKEN10);
var qeys=['ass','pussy','fuck','nude']
client.on('message', message => {
  


     if (message.content.startsWith("$Begin ASS")){
        message.channel.send('^^ass')
        var wrd ='';
        var mylet = [1,2,3,4,5,6,7,8,9];
        var str = message.content;
        for (var i=0; i<str.length;i++){
	        if (str.slice(i,i+1) in mylet){
    	        wrd += str.slice(i,i+1);
                }
}
        var i=1;
        var wrd = parseInt(wrd);
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('^^ass')
            i++;
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
        },12000)
    }
    else if (message.content.startsWith("$Begin PUSSY")){
        message.channel.send('^^pussy')
        var wrd ='';
        var mylet = [1,2,3,4,5,6,7,8,9];
        var str = message.content;
        for (var i=0; i<str.length;i++){
	        if (str.slice(i,i+1) in mylet){
    	        wrd += str.slice(i,i+1);
                }
}
        var i=1;
        var wrd = parseInt(wrd);
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('^^pussy')
            i++;
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
        },12000)
    }
    
    else if (message.content.startsWith("$Begin FUCK")){
        message.channel.send('^^fuck')
        var wrd ='';
        var mylet = [1,2,3,4,5,6,7,8,9];
        var str = message.content;
        for (var i=0; i<str.length;i++){
	        if (str.slice(i,i+1) in mylet){
    	        wrd += str.slice(i,i+1);
                }
}
        var i=1;
        var wrd = parseInt(wrd);
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('^^fuck')
            i++;
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
        },12000)
    }

    else if (message.content.startsWith("$Begin NUDE")){
        message.channel.send('^^nude')
        var wrd ='';
        var mylet = [1,2,3,4,5,6,7,8,9];
        var str = message.content;
        for (var i=0; i<str.length;i++){
	        if (str.slice(i,i+1) in mylet){
    	        wrd += str.slice(i,i+1);
                }
}
        var i=1;
        var wrd = parseInt(wrd);
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('^^nude')
            i++;
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
        },12000)
    }
    
    
});


/*
var wrd ='';
var mylet = [1,2,3,4,5,6,7,8,9];
var str = "Apple 15";
for (var i=0; i<str.length;i++){
	if (str.slice(i,i+1) in mylet){
    	wrd += str.slice(i,i+1);
    }
}
console.log(wrd);
*/