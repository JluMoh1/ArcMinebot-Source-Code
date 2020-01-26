const Discord = require("discord.js");
const client = new Discord.Client();
client.login("NjQ3ODgyMTY0NDAyMjU3OTYw.XixZcA.jHV5BvHA3TG7woGjGx72yGGKrlo");

client.on("ready", () => {
  console.log(`Привет, ${client.user.username} теперь онлайн!`);

  client.user.setPresence({
      status: "online",
      game: {
          name: "In Dev. 2020",
          type: "PLAYING"
      }
  }); 
});



client.on("message", (message) => { //В случае если бот заметит новое сообщение (message)..
  if(message.content == "!help"){ //Он проверит если его контент (content) равняется фразе "!privet"
  message.channel.send("Привет мои команды: :wave:"); //И в случае если так и есть он ответит на сообщение фразой Привет! и отправит смайлик
  message.channel.send("!help - Узнать этот список");
  message.channel.send("!admins - Список админов");
  message.channel.send("!groups - Узнать группы сервера")

  } //Закрытие условия
  }); //Закрытие события

client.on("message", (message) => {
  if(message.content == "!admins"){ // Выводит список администрации
      message.channel.send("> Cписок администрации: ") 
      message.channel.send("> Основатель сервера: **ziki12** ")
      message.channel.send("> Разработчик бота: **Miraqle_**")
      message.channel.send("> **ArcMine Bot - Сделан на JavaScript, его разработчик: Miraqle_ (vepex)** ")
  }
  }); // Окончание условия 2



  client.on('message', message => {
      if (!message.guild) return;
      if (message.content.startsWith('!kick')) { // kick команда
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member.kick('Дополнительная причина, которая будет отображаться в журналах аудита').then(() => {
              message.reply(`Успешно кикнут: ${user.tag}`);
            }).catch(err => {
              message.reply(`Я не смогу кикнуть ${user.tag}`);
              console.error(err);
            });
          } else {
            message.reply('Этот пользователь не в этой гильдии!');
          }
        } else {
          message.reply('Не указан пользователь для кика!');
        }
      }
    });


    client.on('message', message => {
      if (!message.guild) return;
      if (message.content.startsWith('!ban')) { // Бан команда
        
        const user = message.mentions.users.first();
        
        if (user) {
          
          const member = message.guild.member(user);
          
          if (member) {
        
            member.ban({
              reason: 'Он был плохим!',
            }).then(() => {
              message.reply(`Успешно забанен: ${user.tag}`);
            }).catch(err => {
              message.reply('Я не могу забанить этого пользователя');
              console.error(err);
            });
          } else {
          
            message.reply('Этот пользователь не в этой гильдии!');
          }
        } else {
          message.reply('Не могу забанить Данного пользователя либо роль высокая! Или его нет!');
        }
      }
    });

    client.on("message", (message) => {
      if(message.content == "!groups"){ // Группы сервера
          message.channel.send("***Группы:***")
          message.channel.send("> **Discord-Group: https://discord.gg/eDVqKJC**")
          message.channel.send("> **Группа вк: vk.com/arcminesky**")
          message.channel.send("> **Dev-Group vk.com/arcmine_dev**")
          message.channel.send("> **Мем группа: vk.com/arcmine_memes**")
          message.channel.send("> **Магазин: https://arcminesky.trademc.org/**")
      }
  }); 


