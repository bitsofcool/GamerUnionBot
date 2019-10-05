// Made by @GrumptyDumpty (aka [Redacted])

var exports = module.exports;

exports.message = function(client, msg) {
	let messageArray = msg.content.split(' ');
	let cmd = messageArray[0];
	let args = messageArray.slice(1);

	if (cmd.toUpperCase() === "I'M" || cmd.toUpperCase() === 'IM' || cmd.toUpperCase() === 'I’M') {
		let adjective;
		if (args.length === 1) {
			adjective = messageArray[1];
		} else if (args.length > 1) {
			adjective = args.join(' ');
		}
		msg.channel.send(`Hi ${adjective}, I'm dad!`);
	}
};
