const Discord = require ("discord.js");
const client = new Discord.Client();
const nitro = require('discordnitro')

client.login(process.env.TOKEN);

client.on('message', message => {
    if (message.content === '>nitro') {  
      message.channel.send(nitro(1));
    }
  });

  client.on('message', message => {
    if (message.content === '>help') {  
      message.channel.send("```Help - Discord Free Nitro\n\n>nitro (give you a free nitro)```");
    }
  });
  client.on('message', message => {
    if (message.content === '>gen') {
        message.channel.send(nitro(1));
        while (message.channel.send(nitro(1)) {
            if (message.content === '>stop') {
                return message.channel.send('stopped');
            }
        }
    }
});

var http = require ("https")

http.createServer(function (req, res) {
    res.write("Hello World");
    res.end();
}).listen(process.env.PORT)
