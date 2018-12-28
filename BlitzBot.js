const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;

client.on("ready", () => {
   console.log("Estoy listo!");
   client.user.setPresence({
          status: "online",
          game: {
              name: "--help |BETA v1.0!",
              type: "PLAYING"
          }
      });


});


client.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


    if(command === 'kick'){



    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!kUser) return message.channel.send("No Se Encuentra Un Usuario!");

    let kReason = args.join(" ").slice(22);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");

    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");



    let kickEmbed = new Discord.RichEmbed()

    .setDescription("~Kick~")

    .setColor("#e56b00")

    .addField("User Kickeado", `${kUser} with ID ${kUser.id}`)

    .addField("Kickeado Por", `<@${message.author.id}> with ID ${message.author.id}`)

    .addField("Kickeado En", message.channel)

    .addField("Tiempo", message.createdAt)

    .addField("Razón", kReason);



    let kickChannel = message.guild.channels.find(`name`, "Incidentes");

    if(!kickChannel) return message.channel.send("No Hay Incidentes En Este Canal.");



    message.guild.member(kUser).kick(kReason);

    kickChannel.send(kickEmbed);



    return;

  }



    if(command === 'report'){


 let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

 if(!rUser) return message.channel.send("No Se Encuentra Usuario.");

 let rreason = args.join(" ").slice(22);



 let reportEmbed = new Discord.RichEmbed()

 .setDescription("Reports")

 .setColor("#15f153")

 .addField("Usuario Reportado", `${rUser} with ID: ${rUser.id}`)

 .addField("Reportado Por", `${message.author} with ID: ${message.author.id}`)

 .addField("Canal", message.channel)

 .addField("Tiempo", message.createdAt)

 .addField("Razón", rreason);



 let reportschannel = message.guild.channels.find(`name`, "reports");

 if(!reportschannel) return message.channel.send("No Se Encuentra Canal.");





 message.delete().catch(O_o=>{});

 reportschannel.send(reportEmbed);



 return;

}





  if(command === 'BlitzBot'){



    let bicon = bot.user.displayAvatarURL;

    let botembed = new Discord.RichEmbed()

    .setDescription("Información Del Bot")

    .setColor("#15f153")

    .setThumbnail(bicon)

    .addField("Nombre Del Bot", bot.user.username)

    .addField("Creado Por", bot.user.createdAt);



    return message.channel.send(botembed);

  }











    if(command === 'ban'){

            let user = message.mentions.users.first();
            let razon = args.slice(1).join(' ');

            if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
            if(!razon) return message.channel.send('Escriba un razón, `-ban @username [razón]`');
            if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.');


            message.guild.member(user).ban(razon);
            message.channel.send(`**${user.username}**, fue baneado del servidor, razón: ${razon}.`);

      }

if(command === 'msg'){
  let mensaje = args.join(" ");

if(!mensaje) return message.channel.send(`Escriba un mensaje para enviartelo por privados.`);
message.author.send(mensaje);

}

if(message.content.startsWith(prefix + 'help')){

    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados,Gracias ;).');
    message.author.send('**COMANDOS DE BLITZBOT**\n```\n'+
                        '-> '+prefix+'ping           :: Comprueba la latencia del bot y de tus mensajes.\n'+
                        '-> '+prefix+'avatar <@user> :: Muestra el avatar de un usuario.\n'+
                        '-> '+prefix+'decir          :: Hace que el bot diga un mensaje.\n'+
                        '-> '+prefix+'user <@user>   :: Muestra información sobre un usuario mencioando.\n'+
                        '-> '+prefix+'server         :: Muestra información de un servidor determinado.\n'+
                        '-> '+prefix+'report         :: Reporta a un usuario.\n'+
                        '-> '+prefix+'ban <@user>    :: Banear a un usuario del servidor incluye razon.\n'+
                        '-> '+prefix+'kick <@user>   :: Patear a un usuario del servidor incluye razon.\n'+
                        'Soporte Contactando Con El Creador: ☠𝕏𝕩ℙ𝕣𝕠𝕁𝕠𝕣𝕕𝕚𝕩𝕏☠#0002  ');

  }





if(command === 'purge'){
  let cantidad = parseInt(args[0]);
message.channel.bulkDelete(cantidad);

}






if(command === 'ping'){
  let ping = Math.floor(message.client.ping);
  message.channel.send(":ping_pong: Pong!, "+ ping + "ms");

}


if(command === 'server'){
  var server = message.guild;

const embed = new Discord.RichEmbed()
    .setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
    .addField('ID', server.id, true)
    .addField('Region', server.region, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor', server.owner.user.tag +'('+server.owner.user.id +')', true)
    .addField('Miembros', server.memberCount, true)
    .addField('Roles', server.roles.size, true)
    .setColor(0x66b3ff)

message.channel.send({ embed });
}



if(command === 'avatar'){
  let miembro = message.mentions.users.first()
if (!miembro) {
    const embed = new Discord.RichEmbed()
        .setImage(`${message.author.avatarURL}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar de ${message.author.tag}`);
    message.channel.send({ embed });

} else {
    const embed = new Discord.RichEmbed()
        .setImage(`${miembro.avatarURL}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar de ${miembro.tag}`);

    message.channel.send({ embed });

};





if(command === 'encuesta'){
  let nombre = args[0];
  let edad = args[1];
  let color = args[2];

  message.channel.send(`Hola ${nombre}, tienes ${edad} años y te gusta el color ${color}.`);

}


if(command === 'c'){
  let texto = args.join(" ");
  if(!texto) return message.channel.send(`Escriba un contenido pára decir.`);

  message.channel.send(texto);


}




  if(command === 'ping'){
    if (!message.content.startsWith(prefix)) return;
if (message.author.bot) return;
    message.channel.send("pong!");

  } else
if(command === 'hola'){
    if (!message.content.startsWith(prefix)) return;
if (message.author.bot) return;
     message.channel.send("Hola que tal?");

  }
 if (message.content.startsWith(prefix +"emblem")) {
   const embed = new Discord.RichEmbed()
     .setTitle("BlitzBot Emblem")
     .setAuthor(message.author.username, message.author.avatarURL)
     .setColor(0x00AE86)
     .setDescription("Bot Creado Para Musica Y Moderación.")
     .setFooter("Gracias Por Usar BlitzBot", client.user.avatarURL)
     .setImage(message.author.avatarURL)
     .setThumbnail(message.author.avatarURL)
     .setTimestamp()
     .setURL("https://github.com/CraterMaik")
     .addField("Este Bot Esta En Estado De Pruebas", "Algun Error Contacten Con El Creador.")
     .addField("Feliz", "NAVIDAD!",  true)
     .addBlankField(true)
     .addField("Bot Creado By XxProJordixX.", true);

message.channel.send({embed});
}




}});

client.login(config.token);
