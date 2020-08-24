const Discord = require("discord.js");
const client = new Discord.Client();


client.login(process.env.TOKEN);



client.on('message', message => {
    if (message.content === '$Begin PUSSY') {
        var i = 1;
        var myinter = setInterval(function fun(){
            message.channel.send('^^pussy')
            i++;
            if (i==2){
                clearInterval(myinter)
            }
        },12000)
       
    }

    if (message.content === '$Begin ASS') {
        var i = 1;
        var myinter = setInterval(function fun(){
            message.channel.send('^^ass')
            i++;
            if (i==2){
                clearInterval(myinter)
            }
        },12000)
       
    }
    if (message.content === '$Begin FUCK') {
        var i = 1;
        var myinter = setInterval(function fun(){
            message.channel.send('^^fuck')
            i++;
            if (i==2){
                clearInterval(myinter)
            }
        },12000)
       
    }
    if (message.content === '$Begin NUDES') {
        var i = 1;
        var myinter = setInterval(function fun(){
            message.channel.send('^^nudes')
            i++;
            if (i==2){
                clearInterval(myinter)
            }
        },12000)
       
    }


    if (message.content.startsWith("$Begin ASS")){
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