module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Muzyka zatrzymała się, ponieważ zostałem odłączony od kanału !`);
};