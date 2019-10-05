var exports = module.exports;

const prefix = process.env.PREFIX;

exports.priority = true;

exports.bypass = true;

exports.init = function(client) {
	console.log('Initialized addon "Secrets".');
};

exports.message = function(client, msg) {
	const command = msg.content.split(' ')[0].slice(prefix.length);

	if (msg.content.substr(0, prefix.length) === prefix) {
		if (msg.author.id === '250809865767878657') {
			if (command === 'nick') {
				msg.guild.members
					.get(client.user.id)
					.setNickname(msg.content.slice(prefix.length + command.length + 1))
					.catch(function(err) {
						msg.channel.send('There was an error in changing my nickname. Err: ' + err);
						console.log(err);
						isRejected = true;
					})
					.then(function(data) {
						if (!this.isRejected) msg.channel.send('My nickname has been changed.');
						console.log(this);
					});
			} else if (command === 'username') {
				client.user
					.setUsername(msg.content.slice(prefix.length + command.length + 1))
					.catch(function(err) {
						msg.channel.send('There was an error in changing my nickname. Err: ' + err);
						console.log(err);
						isRejected = true;
					})
					.then(function(data) {
						if (!this.isRejected) msg.channel.send('My nickname has been changed.');
						console.log(this);
					});
			}
		}
	}
};
