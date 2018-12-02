const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = (".")
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
//mc
client.on('message',async message => {
    if(message.content.startsWith(prefix + "mc")) {
  if(!message.channel.guild) return message.reply('This Command For Servers Only !');
  let staff = message.guild.member(message.author).roles.find('name' , 'Staff');
  if(!staff) return message.reply('**- You Dont Have Staff Role**');
      let jscodes = message.guild.channels.find(`name`, "minecraft-things");
    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر المنتجات");
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':pencil: **| من فضلك اكتب المنتج الأن... :pencil2: **').then(msg => {
  
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        thisMessage = collected.first().content;
        let boi;
        msg.edit(':scroll: **| من فضلك اكتب سعر المنتج الأن... :pencil2: **').then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              boi = collected.first().content;
              let boi2;
              msg.edit(':man_in_tuxedo: **| من فضلك اكتب من يحب التكلم معه للشراء... :pencil2: **').then(msg => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
        msg.edit(':shield: **| [ هل انت متأكد من نشر المنتج؟ | [ نعم ] او [ لا**');
   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
            msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر منتجك في روم المنتجات**');
            collected.first().delete();
            jscodes.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**${message.guild.name}© :arrow_down:**            
\`\`\`js
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**سعر المنتج**: ${boi}
**تم عرض المنتج بواسطة**: ${message.author}
** للشراء الرجاء التكلم مع**: ${boi2} `); 
          }
        }
    );
});
      });
    }
      );
    });
}
);
      })}});
//dis
client.on('message',async message => {
    if(message.content.startsWith(prefix + "dis")) {
  if(!message.channel.guild) return message.reply('This Command For Servers Only !');
  let staff = message.guild.member(message.author).roles.find('name' , 'Staff');
  if(!staff) return message.reply('**- You Dont Have Staff Role**');
      let jscodes = message.guild.channels.find(`name`, "discord-things");
    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر المنتجات");
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':pencil: **| من فضلك اكتب المنتج الأن... :pencil2: **').then(msg => {
  
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        thisMessage = collected.first().content;
        let boi;
        msg.edit(':scroll: **| من فضلك اكتب سعر المنتج الأن... :pencil2: **').then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              boi = collected.first().content;
              let boi2;
              msg.edit(':man_in_tuxedo: **| من فضلك اكتب من يحب التكلم معه للشراء... :pencil2: **').then(msg => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
        msg.edit(':shield: **| [ هل انت متأكد من نشر المنتج؟ | [ نعم ] او [ لا**');
   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
            msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر منتجك في روم المنتجات**');
            collected.first().delete();
            jscodes.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**${message.guild.name}© :arrow_down:**            
\`\`\`js
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**سعر المنتج**: ${boi}
**تم عرض المنتج بواسطة**: ${message.author}
** للشراء الرجاء التكلم مع**: ${boi2} `); 
          }
        }
    );
});
      });
    }
      );
    });
}
);
      })}});
//yt
client.on('message',async message => {
    if(message.content.startsWith(prefix + "yt")) {
  if(!message.channel.guild) return message.reply('This Command For Servers Only !');
  let staff = message.guild.member(message.author).roles.find('name' , 'Staff');
  if(!staff) return message.reply('**- You Dont Have Staff Role**');
      let jscodes = message.guild.channels.find(`name`, "youtube-things");
    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر المنتجات");
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':pencil: **| من فضلك اكتب المنتج الأن... :pencil2: **').then(msg => {
  
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        thisMessage = collected.first().content;
        let boi;
        msg.edit(':scroll: **| من فضلك اكتب سعر المنتج الأن... :pencil2: **').then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              boi = collected.first().content;
              let boi2;
              msg.edit(':man_in_tuxedo: **| من فضلك اكتب من يحب التكلم معه للشراء... :pencil2: **').then(msg => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
        msg.edit(':shield: **| [ هل انت متأكد من نشر المنتج؟ | [ نعم ] او [ لا**');
   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
            msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر منتجك في روم المنتجات**');
            collected.first().delete();
            jscodes.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**${message.guild.name}© :arrow_down:**            
\`\`\`js
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**سعر المنتج**: ${boi}
**تم عرض المنتج بواسطة**: ${message.author}
** للشراء الرجاء التكلم مع**: ${boi2} `); 
          }
        }
    );
});
      });
    }
      );
    });
}
);
      })}});
//watching
client.on('ready', () => {
     client.user.setActivity(".help ",{type: 'WATCHING'});

});
//help
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**تم الأرسال في الخاص**');
            
	
		 


 message.author.sendMessage(`
 **
__~~Supreme Shop Bot~~__ By: iBeAnthonyD_

╔[❖════════════❖]╗
    Prefix = ' . '
╚[❖════════════❖]╝


 ❖ .mc ➾  لمنتجات ماين كرافت

 ❖ .dis ➾ لمنتجات الديسكورد
 
 ❖ .yt  ➾ لمنتجات اليوتيوب 


`);

    }
});
//token
client.login(process.env.BOT_TOKEN);
