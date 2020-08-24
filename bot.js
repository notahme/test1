const Discord = require("discord.js");
const client = new Discord.Client();


client.login(process.env.TOKEN);



client.on('message', message => {
    if (message.content === '$Begin PUSSY') {
        message.channel.send('^^pussy')
        var i = 0;
        var myinter = setInterval(function fun(){
            message.channel.send('^^pussy')
            i++;
            if (i==2){
                clearInterval(myinter)
            }
        },12000)
       
    }

    else if (message.content === '$Begin ASS') {
        message.channel.send('^^ass')
        var i = 0;
        var myinter = setInterval(function fun(){
            message.channel.send('^^ass')
            i++;
            if (i==2){
                clearInterval(myinter)
            }
        },12000)
       
    }
    else if (message.content === '$Begin FUCK') {
        message.channel.send('^^fuck')
        var i = 0;
        var myinter = setInterval(function fun(){
            message.channel.send('^^fuck')
            i++;
            if (i==2){
                clearInterval(myinter)
            }
        },12000)
       
    }
    else if (message.content === '$Begin NUDES') {
        message.channel.send('^^nudes')
        var i = 0;
        var myinter = setInterval(function fun(){
            message.channel.send('^^nudes')
            i++;
            if (i==2){
                clearInterval(myinter)
            }
        },12000)
       
    }


    else if (message.content.startsWith("$Begin ASS")){
        message.channel.send('^^ass')
        var wrd ='';
        var mylet = [1,2,3,4,5,6,7,8,9];
        var str = message.content;
        for (var i=0; i<str.length;i++){
	        if (str.slice(i,i+1) in mylet){
    	        wrd += str.slice(i,i+1);
                }
}
        var i=0;
        var wrd = parseInt(wrd);
        if (wrd>15){
            var wrd = 15;
        }
        var myinter = setInterval(function func(){
            message.channel.send('^^ass')
            i++;
            if (i==wrd){
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
        var i=0;
        var wrd = parseInt(wrd);
        if (wrd>15){
            var wrd = 15;
        }
        var myinter = setInterval(function func(){
            message.channel.send('^^pussy')
            i++;
            if (i==wrd){
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
        var i=0;
        var wrd = parseInt(wrd);
        if (wrd>15){
            var wrd = 15;
        }
        var myinter = setInterval(function func(){
            message.channel.send('^^fuck')
            i++;
            if (i==wrd){
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
        var i=0;
        var wrd = parseInt(wrd);
        if (wrd>15){
            var wrd = 15;
        }
        var myinter = setInterval(function func(){
            message.channel.send('^^nude')
            i++;
            if (i==wrd){
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