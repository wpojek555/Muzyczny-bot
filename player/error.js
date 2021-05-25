module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Na tym serwerze nie jest odtwarzana żadna muzyka !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Nie masz połączenia z żadnym kanałem głosowym !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Nie mogę dołączyć do Twojego kanału głosowego, sprawdź moje uprawnienia !`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} nie jest dostępny w Twoim kraju! Pomijam...`);
            break;
        case 'MusicStarting':
            message.channel.send(`Muzyka się zaczyna ... poczekaj i spróbuj ponownie!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Coś poszło nie tak ... ERROR: ${error}`);
    };
};
