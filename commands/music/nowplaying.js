module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteś na tym samym kanale głosowym !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Brak aktualnie odtwarzanej muzyki !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'Ten bot został stworzony przez wpojek555' },
                fields: [
                    { name: 'Kanał', value: track.author, inline: true },
                    { name: 'zaproponowane przez', value: track.requestedBy.username, inline: true },
                    { name: 'Z playlisty', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                    { name: 'Wyświetleń', value: track.views, inline: true },
                    { name: 'Trwanie', value: track.duration, inline: true },
                    { name: 'Aktualne filtry', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Głośność', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Tryb powtarzania', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
                    { name: 'Zatrzymany', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

                    { name: 'Pasek postępu', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};