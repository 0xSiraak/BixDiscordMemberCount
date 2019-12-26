const Discord = require('discord.js');
const client = new Discord.Client();

const token = "VOTRE TOKEN";
const prefix = "VOTRE PREFIX";

client.on("ready", async () => {
    console.log('BixDiscordMemberCount is ready.');
});

client.on("message", async function(m) {
    if(m.channel.type !== "text") return;

    var args = m.content.split(/ +/)
    switch(args[0]) {

        case prefix + "bix_count":
            if(!m.member.hasPermission("ADMINISTRATOR")) return;
            if(m.deletable) m.delete()
            setInterval(() => {
                 let dChannels = client.guilds.forEach(c => {
                     c.channels.find(x => x.id === "ID DU CHANNEL").setName("🚀・Membres : " + m.guild.members.size)
                 });
                 let cChannels = client.guilds.forEach(c => {
                     let mo = m.guild.members.filter(o => o.presence.status === "online" || o.presence.status === "dnd" || o.presence.status === "idle");
                     c.channels.find(x => x.id === "ID DU CHANNEL").setName("🚀・Connectés : " + mo.size)
                 })
            }, 10000);
        break;
    }


});

client.login(token);
