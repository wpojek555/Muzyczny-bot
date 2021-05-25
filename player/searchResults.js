module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Oto wyniki wyszukiwania dla zapytania ${query}` },
            footer: { text: 'Ten bot został stworzony przez wpojek555' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};