const { SlashCommandBuilder,EmbedBuilder,ActionRowBuilder,Events,StringSelectMenuBuilder } = require(`@discordjs/builders`)

const cooldown = new Set();

function addToCooldown(ID) {
    cooldown.add(ID);
    setTimeout(() => {
        cooldown.delete(ID);
    }, 30000 /* 30 mins */);
}

module.exports = {
    data: new SlashCommandBuilder()
    .setName("activities")
    .setDescription("เริ่มกิจกรรม"),
    async execute(interaction, client) {
        const Authorprofile = client.config.defultauthorprofile
        const row = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('activities_select')
                    .setPlaceholder('กรุณาเลือกกิจกรรม')
                    .addOptions(
                        {
                            label: 'Youtube - ยูทูป',
                            description: 'Youtube Together',
                            value: 'youtube'
                        },
                        {
                            label: 'Chess - หมากรุก',
                            description: 'Chess in the Park',
                            value: 'chess'
                        },
                        {
                            label: 'Checkers - หมากฮอส',
                            description: 'Checkers in the Park',
                            value: 'checkers'
                        },
                        {
                            label: 'Meme - ทายมีม',
                            description: 'Know what i meme',
                            value: 'kwim'
                        },
                        {
                            label: 'Blazing - คล้ายๆ Uno',
                            description: 'Blazing 8s',
                            value: 'blazing'
                        },
                        {
                            label: 'Sketch Heads - เแข่งวาดรูป',
                            description: 'Sketch Heads',
                            value: 'sketchheads'
                        },
                        {
                            label: 'Spell Cast - เแข่งสะกดคำ',
                            description: 'Spell Cast',
                            value: 'spellcast'
                        },
                        {
                            label: 'Poker Night - ไพ่โป๊กเกอร์',
                            description: 'Poker Night',
                            value: 'poker'
                        },
                        {
                            label: 'Letter Leage - แข่งเรียงคำ',
                            description: 'Letter Leage',
                            value: 'letterleage'
                        }
                    )
            );
        
        if (cooldown.has(interaction.user.id)) {
            interaction.reply(`⏰ คุณ <@${interaction.user.id}> กิจกรรมไม่ได้เกิดขึ้นเร็วขนาดนั้น !\nกรุณารอ \`30 วินาที\` เพื่อให้หนูสร้างกิจกรรมอีกครั้งให้อีกครั้ง`)
        } else {
            if (!interaction.member.voice.channel) {
                const NotinVC = new EmbedBuilder()
                    .setColor(16711680)
                    .setAuthor({ name: `กรุณาเข้าห้องก่อนจะใช้งานคำสั่งนะคะ !` , iconURL: `${Authorprofile}`})
                    .setTimestamp()
        
                    interaction.reply({ embeds : [NotinVC]})
            } else {
                const waitselect = new EmbedBuilder()
                    .setColor(14024959)
                    .setAuthor({ name: `กรุณาเลือกกิจกรรมจากด้านล้างนะคะ !` , iconURL: `${Authorprofile}`})
                    .setTimestamp()
    
                await interaction.reply({ embeds : [waitselect] , components: [row]});
                addToCooldown(interaction.user.id);
                
                const filter = i => i.customId === 'activities_select';
                const collector = interaction.channel.createMessageComponentCollector({
                    filter,
                    time: 15000,  //15 seconds
                });
                
                collector.on('collect', async i => {
                    if (i.values[0] === 'youtube') {
                        client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'youtube').then(async invite => {
                            const StartACT = new EmbedBuilder()
                                .setColor(14024959)
                                .setAuthor({ name: `กิจกรรม Youtube Together` , iconURL: `${Authorprofile}`})
                                .setDescription(`Youtube Together ถูกใช้ในห้อง : <#${interaction.member.voice.channel.id}>\n[>> คลิกที่นี้เพื่อเข้าร่วมกิจกรรมนะคะ ! <<](${invite.code})`)
                                .setImage("https://cdn.discordapp.com/attachments/1024635780360056883/1077545718044184667/YTtogather.png")
                                .setTimestamp()
            
                            await i.update({ embeds : [StartACT], components: []});
                        });
                    } else if (i.values[0] === 'chess') {
                        client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'chess').then(async invite => {
                            const StartACT = new EmbedBuilder()
                                .setColor(14024959)
                                .setAuthor({ name: `กิจกรรม Chess in the Park` , iconURL: `${Authorprofile}`})
                                .setDescription(`Chess in the Park ถูกใช้ในห้อง : <#${interaction.member.voice.channel.id}>\n[>> คลิกที่นี้เพื่อเข้าร่วมกิจกรรมนะคะ ! <<](${invite.code})`)
                                .setImage("https://cdn.discordapp.com/attachments/1024635780360056883/1077548895753752607/CIP.png")
                                .setTimestamp()
    
                            await i.update({ embeds : [StartACT], components: []});
                        });
                    } else if (i.values[0] === 'checkers') {
                        client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'checkers').then(async invite => {
                            const StartACT = new EmbedBuilder()
                                .setColor(14024959)
                                .setAuthor({ name: `กิจกรรม Checkers in the Park` , iconURL: `${Authorprofile}`})
                                .setDescription(`Checkers in the Park ถูกใช้ในห้อง : <#${interaction.member.voice.channel.id}>\n[>> คลิกที่นี้เพื่อเข้าร่วมกิจกรรมนะคะ ! <<](${invite.code})`)
                                .setImage("https://cdn.discordapp.com/attachments/1024635780360056883/1077549537490640906/CIP2.png")
                                .setTimestamp()
            
                            await i.update({ embeds : [StartACT], components: []});
                        });
                    } else if (i.values[0] === 'kwim') {
                        client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'meme').then(async invite => {
                            const StartACT = new EmbedBuilder()
                                .setColor(14024959)
                                .setAuthor({ name: `กิจกรรม Know What I Meme` , iconURL: `${Authorprofile}`})
                                .setDescription(`Know What I Meme ถูกใช้ในห้อง : <#${interaction.member.voice.channel.id}>\n[>> คลิกที่นี้เพื่อเข้าร่วมกิจกรรมนะคะ ! <<](${invite.code})`)
                                .setImage("https://cdn.discordapp.com/attachments/1024635780360056883/1077564723521925130/SH_2.png")
                                .setTimestamp()
            
                            await i.update({ embeds : [StartACT], components: []});
                        });
                    } else if (i.values[0] === 'blazing') {
                        client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'ocho').then(async invite => {
                            const StartACT = new EmbedBuilder()
                                .setColor(14024959)
                                .setAuthor({ name: `กิจกรรม Blazing 8s` , iconURL: `${Authorprofile}`})
                                .setDescription(`Blazing 8s ถูกใช้ในห้อง : <#${interaction.member.voice.channel.id}>\n[>> คลิกที่นี้เพื่อเข้าร่วมกิจกรรมนะคะ ! <<](${invite.code})`)
                                .setImage("https://cdn.discordapp.com/attachments/1061529756203499571/1078272502465310780/B8.png")
                                .setTimestamp()
            
                            await i.update({ embeds : [StartACT], components: []});
                        });
                    } else if (i.values[0] === 'sketchheads') {
                        client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'sketchheads').then(async invite => {
                            const StartACT = new EmbedBuilder()
                                .setColor(14024959)
                                .setAuthor({ name: `กิจกรรม Sketch Heads` , iconURL: `${Authorprofile}`})
                                .setDescription(`Sketch Heads ถูกใช้ในห้อง : <#${interaction.member.voice.channel.id}>\n[>> คลิกที่นี้เพื่อเข้าร่วมกิจกรรมนะคะ ! <<](${invite.code})`)
                                .setImage("https://cdn.discordapp.com/attachments/1024635780360056883/1077550126698074213/SH.png")
                                .setTimestamp()
            
                            await i.update({ embeds : [StartACT], components: []});
                        });
                    } else if (i.values[0] === 'spellcast') {
                        client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'spellcast').then(async invite => {
                            const StartACT = new EmbedBuilder()
                                .setColor(14024959)
                                .setAuthor({ name: `กิจกรรม Spell Cast` , iconURL: `${Authorprofile}`})
                                .setDescription(`Spell Cast ถูกใช้ในห้อง : <#${interaction.member.voice.channel.id}>\n[>> คลิกที่นี้เพื่อเข้าร่วมกิจกรรมนะคะ ! <<](${invite.code})`)
                                .setImage("https://cdn.discordapp.com/attachments/1024635780360056883/1077546801630036048/spellcast.png")
                                .setTimestamp()
            
                            await i.update({ embeds : [StartACT], components: []});
                        });
                    } else if (i.values[0] === 'poker') {
                        client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'poker').then(async invite => {
                            const StartACT = new EmbedBuilder()
                                .setColor(14024959)
                                .setAuthor({ name: `กิจกรรม Poker Night` , iconURL: `${Authorprofile}`})
                                .setDescription(`Poker Night ถูกใช้ในห้อง : <#${interaction.member.voice.channel.id}>\n🔞  เกมนี้ต้องอายุ 18+ ถึงจะเล่นได้ !\n[>> คลิกที่นี้เพื่อเข้าร่วมกิจกรรมนะคะ ! <<](${invite.code})`)
                                .setImage("https://cdn.discordapp.com/attachments/1061529756203499571/1077901308150939668/PO.png")
                                .setTimestamp()
            
                            await i.update({ embeds : [StartACT], components: []});
                        });
                    } else if (i.values[0] === 'letterleage') {
                        client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'lettertile').then(async invite => {
                            const StartACT = new EmbedBuilder()
                                .setColor(14024959)
                                .setAuthor({ name: `กิจกรรม Letter Leage` , iconURL: `${Authorprofile}`})
                                .setDescription(`Letter Leage ถูกใช้ในห้อง : <#${interaction.member.voice.channel.id}>\n[>> คลิกที่นี้เพื่อเข้าร่วมกิจกรรมนะคะ ! <<](${invite.code})`)
                                .setImage("https://cdn.discordapp.com/attachments/1024635780360056883/1077548164627841064/LL.png")
                                .setTimestamp()
            
                            await i.update({ embeds : [StartACT], components: []});
                        });
                    }
                });
            
                collector.on('end', async collected => {
                    if (collected.size === 0) {
                        const Tooslow = new EmbedBuilder()
                            .setColor(16711680)
                            .setAuthor({ name: `คุณเลือกกิจกรรมช้าไปนะคะ !\nใช้คำสั่ง /activities ใหม่นะคะ` , iconURL: `${Authorprofile}`})
                            .setTimestamp()
                        await interaction.editReply({ embeds : [Tooslow], components: []});
                    }
                });
            }
        }
    }
}