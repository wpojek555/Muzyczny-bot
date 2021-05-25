module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} został dodany do kolejki (**${playlist.tracks.length}** piosenka) !`);
};