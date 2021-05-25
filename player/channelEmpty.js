module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Muzyka zatrzymała się, ponieważ na kanale głosowym nie ma już członków!`);
};