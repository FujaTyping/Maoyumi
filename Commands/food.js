const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'food',
        description: 'ระบบสุ่มอาหาร',
        usage: `mao!food`,
    },
    async run (client,message,args) {
        const ListFood = [ 
            "ระบบปิดปรับปรุ่งอยู่ !"
        ];

        const FoodResponseAnswer = Math.floor(Math.random() * ListFood.length);

		message.reply(ListFood[FoodResponseAnswer])
    }
}