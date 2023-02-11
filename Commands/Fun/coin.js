const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'coin',
        description: 'เกมโยนเหรียญ',
        usage: `m!coin`,
    },
    async run (client,message,args) {
        const Coindata = [ "หัว","ก้อย" ];
        const CoinAnswer = Math.floor(Math.random() * Coindata.length);
        let thumimg;

        if( Coindata[CoinAnswer] == "หัว" ) {
            thumimg = "https://th.bing.com/th/id/R.92bc812a6fb1138b8270a278cf6d9639?rik=ktoYKYXhH8pV9A&pid=ImgRaw&r=0";
        }
        if( Coindata[CoinAnswer] == "ก้อย" ) {
            thumimg = "https://th.bing.com/th/id/R.98f894868e1caa125b2f22a5e085332b?rik=X8tJRiPv52EYpA&pid=ImgRaw&r=0";
        }

        const Coinflip = new EmbedBuilder()
            .setColor(16758784)
            .setAuthor({ name: `เกมโยนเหรียญ - Coinflip` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setDescription("โยนเหรียญได้ "+"**"+Coindata[CoinAnswer]+"**")
            .setThumbnail(thumimg)
            .setTimestamp()
            .setFooter({ text: 'Coinflip - command'});

        message.reply({  embeds: [Coinflip] })
    }
}