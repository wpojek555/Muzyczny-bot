module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Nie znaleziono wyników w YouTube dla zapytania ${query} !`);
};