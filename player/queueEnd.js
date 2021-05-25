module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Muzyka zatrzymała się, ponieważ w kolejce nie ma już muzyki !`);
};