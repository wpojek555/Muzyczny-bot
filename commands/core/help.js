module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Pomoc' },
                    footer: { text: 'Ten bot został stworzony przez wpojek555' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Muzyka', value: music },
                        { name: 'Filtry', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `By użyć filtrów, ${client.config.discord.prefix}filter (the filter). Example : ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Nie znalazłem tej komendy!`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Pomoc' },
                    footer: { text: 'Ten bot został stworzony przez wpojek555' },
                    fields: [
                        { name: 'Nazwa', value: command.name, inline: true },
                        { name: 'Kategoria', value: command.category, inline: true },
                        { name: 'Aliasy', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Wykorzystanie', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Znajdź informacje o podanym poleceniu. \nObowiązkowe argumenty `[]`, opcjonalne argumenty `<>`.',
                }
            });
        };
    },
};