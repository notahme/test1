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
/*
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
*/
var qeys=['ass','pussy','fuck','nude']
client.on('message', message => {
	if (message.content.startsWith("$help")){
		var msg = [
"`**NSFW Commands**`",
"`**Try This TAGS $B1 / $B2**`",
"**$B(1,2) porninfifteenseconds (number)**",
"**$B(1,2) amateur (number)**",
"**$B(1,2) anal (number)**",
"**$B(1,2) ass (number)**",
"**$B(1,2) asian (number)**",
"**$B(1,2) bbw (number)**",
"**$B(1,2) bdsm (number)**",
"**$B(1,2) bigass (number)**",
"**$B(1,2) bigboobs (number)**",
"**$B(1,2) blondes (number)**",
"**$B(1,2) blowjob (number)**",
"**$B(1,2) boobs (number)**",
"**$B(1,2) boredandignored (number)**",
"**$B(1,2) busty (number)**",
"**$B(1,2) cam (number)**",
"**$B(1,2) cameltoe (number)**",
"**$B(1,2) changingroom (number)**",
"**$B(1,2) cheerleader (number)**",
"**$B(1,2) chinese (number)**",
"**$B(1,2) college (number)**",
"**$B(1,2) cosplay (number)**",
"**$B(1,2) couples (number)**",
"**$B(1,2) cumslut (number)**",
"**$B(1,2) dp (number)**",
"**$B(1,2) fyiff (number)**",
"**$B(1,2) facefuck (number)**",
"**$B(1,2) facial (number)**",
"**$B(1,2) fisting (number)**",
"**$B(1,2) flashing (number)**",
"**$B(1,2) fuck (number)**",
"**$B(1,2) gangbang (number)**",
"**$B(1,2) gif (number)**",
"**$B(1,2) group (number)**",
"**$B(1,2) gyiff (number)**",
"**$B(1,2) hairy (number)**",
"**$B(1,2) hardcore (number)**",
"**$B(1,2) hentai (number)**",
"**$B(1,2) indian (number)**",
"**$B(1,2) japanese (number)**",
"**$B(1,2) korean (number)**",
"**$B(1,2) lesbian (number)**",
"**$B(1,2) milf (number)**",
"**$B(1,2) orgasm (number)**",
"**$B(1,2) pawg (number)**",
"**$B(1,2) pool (number)**",
"**$B(1,2) pornsearch (number)**",
"**$B(1,2) pornstars (number)**",
"**$B(1,2) pov (number)**",
"**$B(1,2) public (number)**",
"**$B(1,2) pussy (number)**",
"**$B(1,2) redheads (number)**",
"**$B(1,2) scissoring (number)**",
"**$B(1,2) smallass (number)**",
"**$B(1,2) smallboobs (number)**",
"**$B(1,2) snapchat (number)**",
"**$B(1,2) squirting (number)**",
"**$B(1,2) thighs (number)**",
"**$B(1,2) twerk (number)**",
"**$B(1,2) underboob (number)**",
"**$B(1,2) uniform (number)**",
"**$B(1,2) yoga (number)**"
  ].join("\n");
	message.channel.send(msg)
	}
	else if (message.content.startsWith("$B1 ASS")){
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
    else if (message.content.startsWith("$B1 PUSSY")){
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
    
    else if (message.content.startsWith("$B1ST")){
        message.channel.send('BOT IS ON :white_check_mark:')
        }

    else if (message.content.startsWith("$B1 FUCK")){
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

    else if (message.content.startsWith("$B1 NUDE")){
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
    else if (message.content.startsWith("$B1 porninfifteenseconds")){
        message.channel.send('-porninfifteenseconds')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-porninfifteenseconds')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 amateur")){
        message.channel.send('-amateur')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-amateur')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 anal")){
        message.channel.send('-anal')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-anal')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 ass")){
        message.channel.send('-ass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-ass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 asian")){
        message.channel.send('-asian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-asian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bbw")){
        message.channel.send('-bbw')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bbw')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bdsm")){
        message.channel.send('-bdsm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bdsm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bigass")){
        message.channel.send('-bigass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bigboobs")){
        message.channel.send('-bigboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 blondes")){
        message.channel.send('-blondes')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blondes')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 blowjob")){
        message.channel.send('-blowjob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blowjob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 boobs")){
        message.channel.send('-boobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 boredandignored")){
        message.channel.send('-boredandignored')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boredandignored')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 busty")){
        message.channel.send('-busty')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-busty')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cam")){
        message.channel.send('-cam')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cam')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cameltoe")){
        message.channel.send('-cameltoe')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cameltoe')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 changingroom")){
        message.channel.send('-changingroom')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-changingroom')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cheerleader")){
        message.channel.send('-cheerleader')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cheerleader')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 chinese")){
        message.channel.send('-chinese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-chinese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 college")){
        message.channel.send('-college')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-college')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cosplay")){
        message.channel.send('-cosplay')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cosplay')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 couples")){
        message.channel.send('-couples')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-couples')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cumslut")){
        message.channel.send('-cumslut')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cumslut')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 dp")){
        message.channel.send('-dp')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-dp')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 fyiff")){
        message.channel.send('-fyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 facefuck")){
        message.channel.send('-facefuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facefuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 facial")){
        message.channel.send('-facial')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facial')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 fisting")){
        message.channel.send('-fisting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fisting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 flashing")){
        message.channel.send('-flashing')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-flashing')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 fuck")){
        message.channel.send('-fuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 gangbang")){
        message.channel.send('-gangbang')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gangbang')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 gif")){
        message.channel.send('-gif')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gif')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 group")){
        message.channel.send('-group')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-group')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 gyiff")){
        message.channel.send('-gyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 hairy")){
        message.channel.send('-hairy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hairy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 hardcore")){
        message.channel.send('-hardcore')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hardcore')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 hentai")){
        message.channel.send('-hentai')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hentai')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 indian")){
        message.channel.send('-indian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-indian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 japanese")){
        message.channel.send('-japanese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-japanese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 korean")){
        message.channel.send('-korean')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-korean')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 lesbian")){
        message.channel.send('-lesbian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-lesbian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 milf")){
        message.channel.send('-milf')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-milf')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 orgasm")){
        message.channel.send('-orgasm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-orgasm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pawg")){
        message.channel.send('-pawg')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pawg')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pool")){
        message.channel.send('-pool')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pool')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pornsearch")){
        message.channel.send('-pornsearch')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornsearch')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pornstars")){
        message.channel.send('-pornstars')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornstars')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pov")){
        message.channel.send('-pov')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pov')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 public")){
        message.channel.send('-public')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-public')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pussy")){
        message.channel.send('-pussy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pussy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 redheads")){
        message.channel.send('-redheads')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-redheads')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 scissoring")){
        message.channel.send('-scissoring')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-scissoring')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 smallass")){
        message.channel.send('-smallass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 smallboobs")){
        message.channel.send('-smallboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 snapchat")){
        message.channel.send('-snapchat')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-snapchat')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 squirting")){
        message.channel.send('-squirting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-squirting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 thighs")){
        message.channel.send('-thighs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-thighs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 twerk")){
        message.channel.send('-twerk')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-twerk')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 underboob")){
        message.channel.send('-underboob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-underboob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 uniform")){
        message.channel.send('-uniform')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-uniform')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 yoga")){
        message.channel.send('-yoga')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-yoga')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
});

client2.on('message', message => {
    if (message.content.startsWith("$B1 ASS")){
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
    else if (message.content.startsWith("$B1ST")){
        message.channel.send('BOT IS ON :white_check_mark:')
        }
    else if (message.content.startsWith("$B1 PUSSY")){
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
    
    else if (message.content.startsWith("$B1 FUCK")){
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

    else if (message.content.startsWith("$B1 NUDE")){
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
    else if (message.content.startsWith("$B1 porninfifteenseconds")){
        message.channel.send('-porninfifteenseconds')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-porninfifteenseconds')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 amateur")){
        message.channel.send('-amateur')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-amateur')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 anal")){
        message.channel.send('-anal')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-anal')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 ass")){
        message.channel.send('-ass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-ass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 asian")){
        message.channel.send('-asian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-asian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bbw")){
        message.channel.send('-bbw')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bbw')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bdsm")){
        message.channel.send('-bdsm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bdsm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bigass")){
        message.channel.send('-bigass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bigboobs")){
        message.channel.send('-bigboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 blondes")){
        message.channel.send('-blondes')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blondes')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 blowjob")){
        message.channel.send('-blowjob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blowjob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 boobs")){
        message.channel.send('-boobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 boredandignored")){
        message.channel.send('-boredandignored')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boredandignored')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 busty")){
        message.channel.send('-busty')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-busty')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cam")){
        message.channel.send('-cam')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cam')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cameltoe")){
        message.channel.send('-cameltoe')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cameltoe')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 changingroom")){
        message.channel.send('-changingroom')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-changingroom')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cheerleader")){
        message.channel.send('-cheerleader')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cheerleader')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 chinese")){
        message.channel.send('-chinese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-chinese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 college")){
        message.channel.send('-college')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-college')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cosplay")){
        message.channel.send('-cosplay')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cosplay')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 couples")){
        message.channel.send('-couples')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-couples')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cumslut")){
        message.channel.send('-cumslut')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cumslut')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 dp")){
        message.channel.send('-dp')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-dp')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 fyiff")){
        message.channel.send('-fyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 facefuck")){
        message.channel.send('-facefuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facefuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 facial")){
        message.channel.send('-facial')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facial')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 fisting")){
        message.channel.send('-fisting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fisting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 flashing")){
        message.channel.send('-flashing')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-flashing')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 fuck")){
        message.channel.send('-fuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 gangbang")){
        message.channel.send('-gangbang')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gangbang')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 gif")){
        message.channel.send('-gif')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gif')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 group")){
        message.channel.send('-group')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-group')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 gyiff")){
        message.channel.send('-gyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 hairy")){
        message.channel.send('-hairy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hairy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 hardcore")){
        message.channel.send('-hardcore')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hardcore')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 hentai")){
        message.channel.send('-hentai')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hentai')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 indian")){
        message.channel.send('-indian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-indian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 japanese")){
        message.channel.send('-japanese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-japanese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 korean")){
        message.channel.send('-korean')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-korean')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 lesbian")){
        message.channel.send('-lesbian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-lesbian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 milf")){
        message.channel.send('-milf')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-milf')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 orgasm")){
        message.channel.send('-orgasm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-orgasm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pawg")){
        message.channel.send('-pawg')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pawg')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pool")){
        message.channel.send('-pool')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pool')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pornsearch")){
        message.channel.send('-pornsearch')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornsearch')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pornstars")){
        message.channel.send('-pornstars')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornstars')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pov")){
        message.channel.send('-pov')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pov')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 public")){
        message.channel.send('-public')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-public')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pussy")){
        message.channel.send('-pussy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pussy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 redheads")){
        message.channel.send('-redheads')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-redheads')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 scissoring")){
        message.channel.send('-scissoring')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-scissoring')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 smallass")){
        message.channel.send('-smallass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 smallboobs")){
        message.channel.send('-smallboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 snapchat")){
        message.channel.send('-snapchat')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-snapchat')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 squirting")){
        message.channel.send('-squirting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-squirting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 thighs")){
        message.channel.send('-thighs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-thighs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 twerk")){
        message.channel.send('-twerk')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-twerk')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 underboob")){
        message.channel.send('-underboob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-underboob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 uniform")){
        message.channel.send('-uniform')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-uniform')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 yoga")){
        message.channel.send('-yoga')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-yoga')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
});

client3.on('message', message => {
    if (message.content.startsWith("$B1 ASS")){
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
    else if (message.content.startsWith("$B1ST")){
        message.channel.send('BOT IS ON :white_check_mark:')
        }
    else if (message.content.startsWith("$B1 PUSSY")){
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
    
    else if (message.content.startsWith("$B1 FUCK")){
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

    else if (message.content.startsWith("$B1 NUDE")){
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
    else if (message.content.startsWith("$B1 porninfifteenseconds")){
        message.channel.send('-porninfifteenseconds')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-porninfifteenseconds')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 amateur")){
        message.channel.send('-amateur')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-amateur')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 anal")){
        message.channel.send('-anal')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-anal')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 ass")){
        message.channel.send('-ass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-ass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 asian")){
        message.channel.send('-asian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-asian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bbw")){
        message.channel.send('-bbw')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bbw')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bdsm")){
        message.channel.send('-bdsm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bdsm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bigass")){
        message.channel.send('-bigass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bigboobs")){
        message.channel.send('-bigboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 blondes")){
        message.channel.send('-blondes')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blondes')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 blowjob")){
        message.channel.send('-blowjob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blowjob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 boobs")){
        message.channel.send('-boobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 boredandignored")){
        message.channel.send('-boredandignored')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boredandignored')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 busty")){
        message.channel.send('-busty')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-busty')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cam")){
        message.channel.send('-cam')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cam')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cameltoe")){
        message.channel.send('-cameltoe')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cameltoe')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 changingroom")){
        message.channel.send('-changingroom')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-changingroom')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cheerleader")){
        message.channel.send('-cheerleader')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cheerleader')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 chinese")){
        message.channel.send('-chinese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-chinese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 college")){
        message.channel.send('-college')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-college')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cosplay")){
        message.channel.send('-cosplay')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cosplay')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 couples")){
        message.channel.send('-couples')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-couples')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cumslut")){
        message.channel.send('-cumslut')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cumslut')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 dp")){
        message.channel.send('-dp')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-dp')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 fyiff")){
        message.channel.send('-fyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 facefuck")){
        message.channel.send('-facefuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facefuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 facial")){
        message.channel.send('-facial')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facial')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 fisting")){
        message.channel.send('-fisting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fisting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 flashing")){
        message.channel.send('-flashing')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-flashing')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 fuck")){
        message.channel.send('-fuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 gangbang")){
        message.channel.send('-gangbang')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gangbang')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 gif")){
        message.channel.send('-gif')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gif')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 group")){
        message.channel.send('-group')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-group')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 gyiff")){
        message.channel.send('-gyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 hairy")){
        message.channel.send('-hairy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hairy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 hardcore")){
        message.channel.send('-hardcore')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hardcore')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 hentai")){
        message.channel.send('-hentai')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hentai')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 indian")){
        message.channel.send('-indian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-indian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 japanese")){
        message.channel.send('-japanese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-japanese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 korean")){
        message.channel.send('-korean')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-korean')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 lesbian")){
        message.channel.send('-lesbian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-lesbian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 milf")){
        message.channel.send('-milf')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-milf')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 orgasm")){
        message.channel.send('-orgasm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-orgasm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pawg")){
        message.channel.send('-pawg')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pawg')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pool")){
        message.channel.send('-pool')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pool')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pornsearch")){
        message.channel.send('-pornsearch')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornsearch')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pornstars")){
        message.channel.send('-pornstars')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornstars')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pov")){
        message.channel.send('-pov')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pov')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 public")){
        message.channel.send('-public')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-public')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pussy")){
        message.channel.send('-pussy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pussy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 redheads")){
        message.channel.send('-redheads')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-redheads')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 scissoring")){
        message.channel.send('-scissoring')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-scissoring')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 smallass")){
        message.channel.send('-smallass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 smallboobs")){
        message.channel.send('-smallboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 snapchat")){
        message.channel.send('-snapchat')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-snapchat')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 squirting")){
        message.channel.send('-squirting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-squirting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 thighs")){
        message.channel.send('-thighs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-thighs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 twerk")){
        message.channel.send('-twerk')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-twerk')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 underboob")){
        message.channel.send('-underboob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-underboob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 uniform")){
        message.channel.send('-uniform')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-uniform')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 yoga")){
        message.channel.send('-yoga')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-yoga')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
});

client4.on('message', message => {
    if (message.content.startsWith("$B1 ASS")){
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
    else if (message.content.startsWith("$B1ST")){
        message.channel.send('BOT IS ON :white_check_mark:')
        }
    else if (message.content.startsWith("$B1 PUSSY")){
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
    
    else if (message.content.startsWith("$B1 FUCK")){
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

    else if (message.content.startsWith("$B1 NUDE")){
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
    else if (message.content.startsWith("$B1 porninfifteenseconds")){
        message.channel.send('-porninfifteenseconds')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-porninfifteenseconds')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 amateur")){
        message.channel.send('-amateur')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-amateur')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 anal")){
        message.channel.send('-anal')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-anal')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 ass")){
        message.channel.send('-ass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-ass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 asian")){
        message.channel.send('-asian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-asian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bbw")){
        message.channel.send('-bbw')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bbw')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bdsm")){
        message.channel.send('-bdsm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bdsm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bigass")){
        message.channel.send('-bigass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bigboobs")){
        message.channel.send('-bigboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 blondes")){
        message.channel.send('-blondes')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blondes')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 blowjob")){
        message.channel.send('-blowjob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blowjob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 boobs")){
        message.channel.send('-boobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 boredandignored")){
        message.channel.send('-boredandignored')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boredandignored')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 busty")){
        message.channel.send('-busty')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-busty')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cam")){
        message.channel.send('-cam')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cam')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cameltoe")){
        message.channel.send('-cameltoe')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cameltoe')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 changingroom")){
        message.channel.send('-changingroom')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-changingroom')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cheerleader")){
        message.channel.send('-cheerleader')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cheerleader')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 chinese")){
        message.channel.send('-chinese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-chinese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 college")){
        message.channel.send('-college')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-college')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cosplay")){
        message.channel.send('-cosplay')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cosplay')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 couples")){
        message.channel.send('-couples')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-couples')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cumslut")){
        message.channel.send('-cumslut')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cumslut')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 dp")){
        message.channel.send('-dp')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-dp')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 fyiff")){
        message.channel.send('-fyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 facefuck")){
        message.channel.send('-facefuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facefuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 facial")){
        message.channel.send('-facial')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facial')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 fisting")){
        message.channel.send('-fisting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fisting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 flashing")){
        message.channel.send('-flashing')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-flashing')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 fuck")){
        message.channel.send('-fuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 gangbang")){
        message.channel.send('-gangbang')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gangbang')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 gif")){
        message.channel.send('-gif')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gif')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 group")){
        message.channel.send('-group')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-group')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 gyiff")){
        message.channel.send('-gyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 hairy")){
        message.channel.send('-hairy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hairy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 hardcore")){
        message.channel.send('-hardcore')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hardcore')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 hentai")){
        message.channel.send('-hentai')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hentai')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 indian")){
        message.channel.send('-indian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-indian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 japanese")){
        message.channel.send('-japanese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-japanese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 korean")){
        message.channel.send('-korean')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-korean')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 lesbian")){
        message.channel.send('-lesbian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-lesbian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 milf")){
        message.channel.send('-milf')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-milf')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 orgasm")){
        message.channel.send('-orgasm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-orgasm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pawg")){
        message.channel.send('-pawg')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pawg')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pool")){
        message.channel.send('-pool')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pool')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pornsearch")){
        message.channel.send('-pornsearch')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornsearch')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pornstars")){
        message.channel.send('-pornstars')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornstars')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pov")){
        message.channel.send('-pov')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pov')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 public")){
        message.channel.send('-public')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-public')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pussy")){
        message.channel.send('-pussy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pussy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 redheads")){
        message.channel.send('-redheads')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-redheads')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 scissoring")){
        message.channel.send('-scissoring')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-scissoring')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 smallass")){
        message.channel.send('-smallass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 smallboobs")){
        message.channel.send('-smallboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 snapchat")){
        message.channel.send('-snapchat')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-snapchat')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 squirting")){
        message.channel.send('-squirting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-squirting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 thighs")){
        message.channel.send('-thighs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-thighs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 twerk")){
        message.channel.send('-twerk')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-twerk')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 underboob")){
        message.channel.send('-underboob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-underboob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 uniform")){
        message.channel.send('-uniform')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-uniform')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 yoga")){
        message.channel.send('-yoga')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-yoga')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
});

client5.on('message', message => {
    if (message.content.startsWith("$B1 ASS")){
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
    else if (message.content.startsWith("$B1ST")){
        message.channel.send('BOT IS ON :white_check_mark:')
        }
    else if (message.content.startsWith("$B1 PUSSY")){
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
    
    else if (message.content.startsWith("$B1 FUCK")){
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

    else if (message.content.startsWith("$B1 NUDE")){
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
    else if (message.content.startsWith("$B1 porninfifteenseconds")){
        message.channel.send('-porninfifteenseconds')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-porninfifteenseconds')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 amateur")){
        message.channel.send('-amateur')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-amateur')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 anal")){
        message.channel.send('-anal')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-anal')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 ass")){
        message.channel.send('-ass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-ass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 asian")){
        message.channel.send('-asian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-asian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bbw")){
        message.channel.send('-bbw')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bbw')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bdsm")){
        message.channel.send('-bdsm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bdsm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bigass")){
        message.channel.send('-bigass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 bigboobs")){
        message.channel.send('-bigboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 blondes")){
        message.channel.send('-blondes')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blondes')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 blowjob")){
        message.channel.send('-blowjob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blowjob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 boobs")){
        message.channel.send('-boobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 boredandignored")){
        message.channel.send('-boredandignored')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boredandignored')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 busty")){
        message.channel.send('-busty')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-busty')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cam")){
        message.channel.send('-cam')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cam')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cameltoe")){
        message.channel.send('-cameltoe')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cameltoe')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 changingroom")){
        message.channel.send('-changingroom')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-changingroom')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cheerleader")){
        message.channel.send('-cheerleader')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cheerleader')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 chinese")){
        message.channel.send('-chinese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-chinese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 college")){
        message.channel.send('-college')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-college')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cosplay")){
        message.channel.send('-cosplay')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cosplay')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 couples")){
        message.channel.send('-couples')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-couples')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 cumslut")){
        message.channel.send('-cumslut')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cumslut')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 dp")){
        message.channel.send('-dp')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-dp')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 fyiff")){
        message.channel.send('-fyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 facefuck")){
        message.channel.send('-facefuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facefuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 facial")){
        message.channel.send('-facial')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facial')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 fisting")){
        message.channel.send('-fisting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fisting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 flashing")){
        message.channel.send('-flashing')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-flashing')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 fuck")){
        message.channel.send('-fuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 gangbang")){
        message.channel.send('-gangbang')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gangbang')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 gif")){
        message.channel.send('-gif')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gif')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 group")){
        message.channel.send('-group')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-group')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 gyiff")){
        message.channel.send('-gyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 hairy")){
        message.channel.send('-hairy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hairy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 hardcore")){
        message.channel.send('-hardcore')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hardcore')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 hentai")){
        message.channel.send('-hentai')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hentai')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 indian")){
        message.channel.send('-indian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-indian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 japanese")){
        message.channel.send('-japanese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-japanese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 korean")){
        message.channel.send('-korean')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-korean')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 lesbian")){
        message.channel.send('-lesbian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-lesbian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 milf")){
        message.channel.send('-milf')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-milf')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 orgasm")){
        message.channel.send('-orgasm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-orgasm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pawg")){
        message.channel.send('-pawg')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pawg')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pool")){
        message.channel.send('-pool')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pool')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pornsearch")){
        message.channel.send('-pornsearch')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornsearch')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pornstars")){
        message.channel.send('-pornstars')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornstars')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pov")){
        message.channel.send('-pov')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pov')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 public")){
        message.channel.send('-public')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-public')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 pussy")){
        message.channel.send('-pussy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pussy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 redheads")){
        message.channel.send('-redheads')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-redheads')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 scissoring")){
        message.channel.send('-scissoring')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-scissoring')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 smallass")){
        message.channel.send('-smallass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 smallboobs")){
        message.channel.send('-smallboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 snapchat")){
        message.channel.send('-snapchat')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-snapchat')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 squirting")){
        message.channel.send('-squirting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-squirting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 thighs")){
        message.channel.send('-thighs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-thighs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 twerk")){
        message.channel.send('-twerk')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-twerk')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 underboob")){
        message.channel.send('-underboob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-underboob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 uniform")){
        message.channel.send('-uniform')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-uniform')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B1 yoga")){
        message.channel.send('-yoga')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-yoga')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////*//////////////////////////////////////////

client6.on('message', message => {
    if (message.content.startsWith("$B2 ASS")){
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
    else if (message.content.startsWith("$B2ST")){
        message.channel.send('BOT IS ON :white_check_mark:')
        }
    else if (message.content.startsWith("$B2 PUSSY")){
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
    
    else if (message.content.startsWith("$B2 FUCK")){
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

    else if (message.content.startsWith("$B2 NUDE")){
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
    else if (message.content.startsWith("$B2 porninfifteenseconds")){
        message.channel.send('-porninfifteenseconds')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-porninfifteenseconds')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 amateur")){
        message.channel.send('-amateur')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-amateur')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 anal")){
        message.channel.send('-anal')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-anal')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 ass")){
        message.channel.send('-ass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-ass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 asian")){
        message.channel.send('-asian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-asian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bbw")){
        message.channel.send('-bbw')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bbw')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bdsm")){
        message.channel.send('-bdsm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bdsm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bigass")){
        message.channel.send('-bigass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bigboobs")){
        message.channel.send('-bigboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 blondes")){
        message.channel.send('-blondes')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blondes')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 blowjob")){
        message.channel.send('-blowjob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blowjob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 boobs")){
        message.channel.send('-boobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 boredandignored")){
        message.channel.send('-boredandignored')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boredandignored')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 busty")){
        message.channel.send('-busty')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-busty')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cam")){
        message.channel.send('-cam')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cam')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cameltoe")){
        message.channel.send('-cameltoe')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cameltoe')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 changingroom")){
        message.channel.send('-changingroom')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-changingroom')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cheerleader")){
        message.channel.send('-cheerleader')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cheerleader')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 chinese")){
        message.channel.send('-chinese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-chinese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 college")){
        message.channel.send('-college')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-college')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cosplay")){
        message.channel.send('-cosplay')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cosplay')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 couples")){
        message.channel.send('-couples')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-couples')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cumslut")){
        message.channel.send('-cumslut')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cumslut')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 dp")){
        message.channel.send('-dp')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-dp')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 fyiff")){
        message.channel.send('-fyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 facefuck")){
        message.channel.send('-facefuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facefuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 facial")){
        message.channel.send('-facial')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facial')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 fisting")){
        message.channel.send('-fisting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fisting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 flashing")){
        message.channel.send('-flashing')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-flashing')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 fuck")){
        message.channel.send('-fuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 gangbang")){
        message.channel.send('-gangbang')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gangbang')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 gif")){
        message.channel.send('-gif')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gif')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 group")){
        message.channel.send('-group')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-group')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 gyiff")){
        message.channel.send('-gyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 hairy")){
        message.channel.send('-hairy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hairy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 hardcore")){
        message.channel.send('-hardcore')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hardcore')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 hentai")){
        message.channel.send('-hentai')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hentai')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 indian")){
        message.channel.send('-indian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-indian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 japanese")){
        message.channel.send('-japanese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-japanese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 korean")){
        message.channel.send('-korean')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-korean')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 lesbian")){
        message.channel.send('-lesbian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-lesbian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 milf")){
        message.channel.send('-milf')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-milf')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 orgasm")){
        message.channel.send('-orgasm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-orgasm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pawg")){
        message.channel.send('-pawg')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pawg')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pool")){
        message.channel.send('-pool')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pool')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pornsearch")){
        message.channel.send('-pornsearch')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornsearch')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pornstars")){
        message.channel.send('-pornstars')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornstars')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pov")){
        message.channel.send('-pov')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pov')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 public")){
        message.channel.send('-public')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-public')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pussy")){
        message.channel.send('-pussy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pussy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 redheads")){
        message.channel.send('-redheads')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-redheads')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 scissoring")){
        message.channel.send('-scissoring')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-scissoring')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 smallass")){
        message.channel.send('-smallass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 smallboobs")){
        message.channel.send('-smallboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 snapchat")){
        message.channel.send('-snapchat')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-snapchat')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 squirting")){
        message.channel.send('-squirting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-squirting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 thighs")){
        message.channel.send('-thighs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-thighs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 twerk")){
        message.channel.send('-twerk')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-twerk')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 underboob")){
        message.channel.send('-underboob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-underboob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 uniform")){
        message.channel.send('-uniform')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-uniform')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 yoga")){
        message.channel.send('-yoga')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-yoga')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
});

client7.on('message', message => {
    if (message.content.startsWith("$B2 ASS")){
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
    else if (message.content.startsWith("$B2ST")){
        message.channel.send('BOT IS ON :white_check_mark:')
        }
    else if (message.content.startsWith("$B2 PUSSY")){
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
    
    else if (message.content.startsWith("$B2 FUCK")){
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

    else if (message.content.startsWith("$B2 NUDE")){
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
    else if (message.content.startsWith("$B2 porninfifteenseconds")){
        message.channel.send('-porninfifteenseconds')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-porninfifteenseconds')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 amateur")){
        message.channel.send('-amateur')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-amateur')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 anal")){
        message.channel.send('-anal')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-anal')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 ass")){
        message.channel.send('-ass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-ass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 asian")){
        message.channel.send('-asian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-asian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bbw")){
        message.channel.send('-bbw')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bbw')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bdsm")){
        message.channel.send('-bdsm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bdsm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bigass")){
        message.channel.send('-bigass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bigboobs")){
        message.channel.send('-bigboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 blondes")){
        message.channel.send('-blondes')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blondes')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 blowjob")){
        message.channel.send('-blowjob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blowjob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 boobs")){
        message.channel.send('-boobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 boredandignored")){
        message.channel.send('-boredandignored')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boredandignored')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 busty")){
        message.channel.send('-busty')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-busty')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cam")){
        message.channel.send('-cam')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cam')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cameltoe")){
        message.channel.send('-cameltoe')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cameltoe')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 changingroom")){
        message.channel.send('-changingroom')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-changingroom')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cheerleader")){
        message.channel.send('-cheerleader')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cheerleader')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 chinese")){
        message.channel.send('-chinese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-chinese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 college")){
        message.channel.send('-college')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-college')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cosplay")){
        message.channel.send('-cosplay')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cosplay')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 couples")){
        message.channel.send('-couples')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-couples')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cumslut")){
        message.channel.send('-cumslut')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cumslut')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 dp")){
        message.channel.send('-dp')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-dp')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 fyiff")){
        message.channel.send('-fyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 facefuck")){
        message.channel.send('-facefuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facefuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 facial")){
        message.channel.send('-facial')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facial')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 fisting")){
        message.channel.send('-fisting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fisting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 flashing")){
        message.channel.send('-flashing')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-flashing')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 fuck")){
        message.channel.send('-fuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 gangbang")){
        message.channel.send('-gangbang')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gangbang')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 gif")){
        message.channel.send('-gif')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gif')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 group")){
        message.channel.send('-group')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-group')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 gyiff")){
        message.channel.send('-gyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 hairy")){
        message.channel.send('-hairy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hairy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 hardcore")){
        message.channel.send('-hardcore')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hardcore')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 hentai")){
        message.channel.send('-hentai')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hentai')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 indian")){
        message.channel.send('-indian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-indian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 japanese")){
        message.channel.send('-japanese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-japanese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 korean")){
        message.channel.send('-korean')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-korean')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 lesbian")){
        message.channel.send('-lesbian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-lesbian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 milf")){
        message.channel.send('-milf')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-milf')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 orgasm")){
        message.channel.send('-orgasm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-orgasm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pawg")){
        message.channel.send('-pawg')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pawg')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pool")){
        message.channel.send('-pool')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pool')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pornsearch")){
        message.channel.send('-pornsearch')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornsearch')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pornstars")){
        message.channel.send('-pornstars')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornstars')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pov")){
        message.channel.send('-pov')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pov')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 public")){
        message.channel.send('-public')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-public')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pussy")){
        message.channel.send('-pussy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pussy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 redheads")){
        message.channel.send('-redheads')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-redheads')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 scissoring")){
        message.channel.send('-scissoring')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-scissoring')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 smallass")){
        message.channel.send('-smallass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 smallboobs")){
        message.channel.send('-smallboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 snapchat")){
        message.channel.send('-snapchat')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-snapchat')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 squirting")){
        message.channel.send('-squirting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-squirting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 thighs")){
        message.channel.send('-thighs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-thighs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 twerk")){
        message.channel.send('-twerk')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-twerk')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 underboob")){
        message.channel.send('-underboob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-underboob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 uniform")){
        message.channel.send('-uniform')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-uniform')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 yoga")){
        message.channel.send('-yoga')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-yoga')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
});

client8.on('message', message => {
    if (message.content.startsWith("$B2 ASS")){
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
    else if (message.content.startsWith("$B2ST")){
        message.channel.send('BOT IS ON :white_check_mark:')
        }
    else if (message.content.startsWith("$B2 PUSSY")){
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
    
    else if (message.content.startsWith("$B2 FUCK")){
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

    else if (message.content.startsWith("$B2 NUDE")){
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
    else if (message.content.startsWith("$B2 porninfifteenseconds")){
        message.channel.send('-porninfifteenseconds')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-porninfifteenseconds')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 amateur")){
        message.channel.send('-amateur')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-amateur')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 anal")){
        message.channel.send('-anal')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-anal')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 ass")){
        message.channel.send('-ass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-ass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 asian")){
        message.channel.send('-asian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-asian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bbw")){
        message.channel.send('-bbw')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bbw')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bdsm")){
        message.channel.send('-bdsm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bdsm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bigass")){
        message.channel.send('-bigass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bigboobs")){
        message.channel.send('-bigboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 blondes")){
        message.channel.send('-blondes')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blondes')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 blowjob")){
        message.channel.send('-blowjob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blowjob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 boobs")){
        message.channel.send('-boobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 boredandignored")){
        message.channel.send('-boredandignored')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boredandignored')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 busty")){
        message.channel.send('-busty')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-busty')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cam")){
        message.channel.send('-cam')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cam')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cameltoe")){
        message.channel.send('-cameltoe')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cameltoe')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 changingroom")){
        message.channel.send('-changingroom')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-changingroom')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cheerleader")){
        message.channel.send('-cheerleader')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cheerleader')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 chinese")){
        message.channel.send('-chinese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-chinese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 college")){
        message.channel.send('-college')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-college')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cosplay")){
        message.channel.send('-cosplay')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cosplay')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 couples")){
        message.channel.send('-couples')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-couples')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cumslut")){
        message.channel.send('-cumslut')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cumslut')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 dp")){
        message.channel.send('-dp')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-dp')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 fyiff")){
        message.channel.send('-fyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 facefuck")){
        message.channel.send('-facefuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facefuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 facial")){
        message.channel.send('-facial')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facial')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 fisting")){
        message.channel.send('-fisting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fisting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 flashing")){
        message.channel.send('-flashing')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-flashing')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 fuck")){
        message.channel.send('-fuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 gangbang")){
        message.channel.send('-gangbang')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gangbang')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 gif")){
        message.channel.send('-gif')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gif')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 group")){
        message.channel.send('-group')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-group')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 gyiff")){
        message.channel.send('-gyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 hairy")){
        message.channel.send('-hairy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hairy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 hardcore")){
        message.channel.send('-hardcore')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hardcore')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 hentai")){
        message.channel.send('-hentai')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hentai')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 indian")){
        message.channel.send('-indian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-indian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 japanese")){
        message.channel.send('-japanese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-japanese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 korean")){
        message.channel.send('-korean')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-korean')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 lesbian")){
        message.channel.send('-lesbian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-lesbian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 milf")){
        message.channel.send('-milf')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-milf')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 orgasm")){
        message.channel.send('-orgasm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-orgasm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pawg")){
        message.channel.send('-pawg')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pawg')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pool")){
        message.channel.send('-pool')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pool')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pornsearch")){
        message.channel.send('-pornsearch')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornsearch')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pornstars")){
        message.channel.send('-pornstars')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornstars')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pov")){
        message.channel.send('-pov')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pov')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 public")){
        message.channel.send('-public')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-public')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pussy")){
        message.channel.send('-pussy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pussy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 redheads")){
        message.channel.send('-redheads')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-redheads')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 scissoring")){
        message.channel.send('-scissoring')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-scissoring')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 smallass")){
        message.channel.send('-smallass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 smallboobs")){
        message.channel.send('-smallboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 snapchat")){
        message.channel.send('-snapchat')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-snapchat')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 squirting")){
        message.channel.send('-squirting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-squirting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 thighs")){
        message.channel.send('-thighs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-thighs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 twerk")){
        message.channel.send('-twerk')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-twerk')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 underboob")){
        message.channel.send('-underboob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-underboob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 uniform")){
        message.channel.send('-uniform')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-uniform')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 yoga")){
        message.channel.send('-yoga')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-yoga')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
});

client9.on('message', message => {
    if (message.content.startsWith("$B2 ASS")){
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
    else if (message.content.startsWith("$B2ST")){
        message.channel.send('BOT IS ON :white_check_mark:')
        }
    else if (message.content.startsWith("$B2 PUSSY")){
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
    
    else if (message.content.startsWith("$B2 FUCK")){
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

    else if (message.content.startsWith("$B2 NUDE")){
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
    else if (message.content.startsWith("$B2 porninfifteenseconds")){
        message.channel.send('-porninfifteenseconds')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-porninfifteenseconds')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 amateur")){
        message.channel.send('-amateur')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-amateur')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 anal")){
        message.channel.send('-anal')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-anal')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 ass")){
        message.channel.send('-ass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-ass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 asian")){
        message.channel.send('-asian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-asian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bbw")){
        message.channel.send('-bbw')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bbw')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bdsm")){
        message.channel.send('-bdsm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bdsm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bigass")){
        message.channel.send('-bigass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bigboobs")){
        message.channel.send('-bigboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 blondes")){
        message.channel.send('-blondes')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blondes')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 blowjob")){
        message.channel.send('-blowjob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blowjob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 boobs")){
        message.channel.send('-boobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 boredandignored")){
        message.channel.send('-boredandignored')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boredandignored')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 busty")){
        message.channel.send('-busty')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-busty')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cam")){
        message.channel.send('-cam')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cam')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cameltoe")){
        message.channel.send('-cameltoe')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cameltoe')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 changingroom")){
        message.channel.send('-changingroom')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-changingroom')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cheerleader")){
        message.channel.send('-cheerleader')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cheerleader')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 chinese")){
        message.channel.send('-chinese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-chinese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 college")){
        message.channel.send('-college')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-college')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cosplay")){
        message.channel.send('-cosplay')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cosplay')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 couples")){
        message.channel.send('-couples')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-couples')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cumslut")){
        message.channel.send('-cumslut')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cumslut')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 dp")){
        message.channel.send('-dp')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-dp')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 fyiff")){
        message.channel.send('-fyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 facefuck")){
        message.channel.send('-facefuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facefuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 facial")){
        message.channel.send('-facial')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facial')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 fisting")){
        message.channel.send('-fisting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fisting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 flashing")){
        message.channel.send('-flashing')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-flashing')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 fuck")){
        message.channel.send('-fuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 gangbang")){
        message.channel.send('-gangbang')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gangbang')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 gif")){
        message.channel.send('-gif')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gif')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 group")){
        message.channel.send('-group')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-group')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 gyiff")){
        message.channel.send('-gyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 hairy")){
        message.channel.send('-hairy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hairy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 hardcore")){
        message.channel.send('-hardcore')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hardcore')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 hentai")){
        message.channel.send('-hentai')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hentai')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 indian")){
        message.channel.send('-indian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-indian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 japanese")){
        message.channel.send('-japanese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-japanese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 korean")){
        message.channel.send('-korean')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-korean')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 lesbian")){
        message.channel.send('-lesbian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-lesbian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 milf")){
        message.channel.send('-milf')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-milf')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 orgasm")){
        message.channel.send('-orgasm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-orgasm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pawg")){
        message.channel.send('-pawg')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pawg')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pool")){
        message.channel.send('-pool')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pool')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pornsearch")){
        message.channel.send('-pornsearch')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornsearch')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pornstars")){
        message.channel.send('-pornstars')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornstars')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pov")){
        message.channel.send('-pov')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pov')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 public")){
        message.channel.send('-public')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-public')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pussy")){
        message.channel.send('-pussy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pussy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 redheads")){
        message.channel.send('-redheads')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-redheads')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 scissoring")){
        message.channel.send('-scissoring')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-scissoring')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 smallass")){
        message.channel.send('-smallass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 smallboobs")){
        message.channel.send('-smallboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 snapchat")){
        message.channel.send('-snapchat')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-snapchat')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 squirting")){
        message.channel.send('-squirting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-squirting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 thighs")){
        message.channel.send('-thighs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-thighs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 twerk")){
        message.channel.send('-twerk')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-twerk')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 underboob")){
        message.channel.send('-underboob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-underboob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 uniform")){
        message.channel.send('-uniform')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-uniform')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 yoga")){
        message.channel.send('-yoga')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-yoga')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
});

client10.on('message', message => {
    if (message.content.startsWith("$B2 ASS")){
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
    else if (message.content.startsWith("$B2ST")){
        message.channel.send('BOT IS ON :white_check_mark:')
        }
    else if (message.content.startsWith("$B2 PUSSY")){
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
    
    else if (message.content.startsWith("$B2 FUCK")){
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

    else if (message.content.startsWith("$B2 NUDE")){
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
    else if (message.content.startsWith("$B2 porninfifteenseconds")){
        message.channel.send('-porninfifteenseconds')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-porninfifteenseconds')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 amateur")){
        message.channel.send('-amateur')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-amateur')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 anal")){
        message.channel.send('-anal')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-anal')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 ass")){
        message.channel.send('-ass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-ass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 asian")){
        message.channel.send('-asian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-asian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bbw")){
        message.channel.send('-bbw')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bbw')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bdsm")){
        message.channel.send('-bdsm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bdsm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bigass")){
        message.channel.send('-bigass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 bigboobs")){
        message.channel.send('-bigboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-bigboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 blondes")){
        message.channel.send('-blondes')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blondes')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 blowjob")){
        message.channel.send('-blowjob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-blowjob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 boobs")){
        message.channel.send('-boobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 boredandignored")){
        message.channel.send('-boredandignored')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-boredandignored')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 busty")){
        message.channel.send('-busty')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-busty')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cam")){
        message.channel.send('-cam')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cam')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cameltoe")){
        message.channel.send('-cameltoe')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cameltoe')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 changingroom")){
        message.channel.send('-changingroom')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-changingroom')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cheerleader")){
        message.channel.send('-cheerleader')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cheerleader')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 chinese")){
        message.channel.send('-chinese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-chinese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 college")){
        message.channel.send('-college')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-college')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cosplay")){
        message.channel.send('-cosplay')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cosplay')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 couples")){
        message.channel.send('-couples')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-couples')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 cumslut")){
        message.channel.send('-cumslut')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-cumslut')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 dp")){
        message.channel.send('-dp')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-dp')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 fyiff")){
        message.channel.send('-fyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 facefuck")){
        message.channel.send('-facefuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facefuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 facial")){
        message.channel.send('-facial')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-facial')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 fisting")){
        message.channel.send('-fisting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fisting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 flashing")){
        message.channel.send('-flashing')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-flashing')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 fuck")){
        message.channel.send('-fuck')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-fuck')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 gangbang")){
        message.channel.send('-gangbang')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gangbang')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 gif")){
        message.channel.send('-gif')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gif')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 group")){
        message.channel.send('-group')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-group')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 gyiff")){
        message.channel.send('-gyiff')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-gyiff')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 hairy")){
        message.channel.send('-hairy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hairy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 hardcore")){
        message.channel.send('-hardcore')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hardcore')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 hentai")){
        message.channel.send('-hentai')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-hentai')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 indian")){
        message.channel.send('-indian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-indian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 japanese")){
        message.channel.send('-japanese')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-japanese')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 korean")){
        message.channel.send('-korean')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-korean')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 lesbian")){
        message.channel.send('-lesbian')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-lesbian')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 milf")){
        message.channel.send('-milf')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-milf')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 orgasm")){
        message.channel.send('-orgasm')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-orgasm')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pawg")){
        message.channel.send('-pawg')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pawg')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pool")){
        message.channel.send('-pool')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pool')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pornsearch")){
        message.channel.send('-pornsearch')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornsearch')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pornstars")){
        message.channel.send('-pornstars')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pornstars')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pov")){
        message.channel.send('-pov')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pov')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 public")){
        message.channel.send('-public')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-public')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 pussy")){
        message.channel.send('-pussy')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-pussy')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 redheads")){
        message.channel.send('-redheads')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-redheads')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 scissoring")){
        message.channel.send('-scissoring')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-scissoring')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 smallass")){
        message.channel.send('-smallass')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallass')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 smallboobs")){
        message.channel.send('-smallboobs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-smallboobs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 snapchat")){
        message.channel.send('-snapchat')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-snapchat')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 squirting")){
        message.channel.send('-squirting')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-squirting')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 thighs")){
        message.channel.send('-thighs')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-thighs')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 twerk")){
        message.channel.send('-twerk')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-twerk')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 underboob")){
        message.channel.send('-underboob')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-underboob')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 uniform")){
        message.channel.send('-uniform')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-uniform')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
    }
        
else if (message.content.startsWith("$B2 yoga")){
        message.channel.send('-yoga')
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
        if (wrd>5){
            var wrd = 5;
        }
        var myinter = setInterval(function func(){
            message.channel.send('-yoga')
            if (isNaN(wrd)){
                clearInterval(myinter)
            }
            if (i>=wrd){
                clearInterval(myinter)
            }
            i++;
        },4500)
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
