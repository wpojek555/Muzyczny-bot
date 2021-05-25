module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Wybór został **anulowany** !`);
    } else message.channel.send(`${client.emotes.error} - Musisz wysłać prawidłowy numer między **1** a **${tracks.length}**! `);
};