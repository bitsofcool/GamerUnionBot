var exports = module.exports;

exports.priority = true;

exports.bypass = true;

exports.init = function(client) {
	console.log('Initializing Addon "Leave Message"... ');

	client.on('guildMemberRemove', (member) => {
		client.guilds
			.get('585983098928365572')
			.channels.get('616823907072344080')
			.send(`**${member}** has just left da gaming gamers... Bye bye ;(`);
	});

	console.log('Initialized "Leave Message".');
};
