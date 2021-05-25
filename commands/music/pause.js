module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteś na tym samym kanale głosowym !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Brak aktualnie odtwarzanej muzyki !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Muzyka jest już wstrzymana !`);

        const success = client.player.pause(message);

        if (success)
         message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} paused !`);
    },
};