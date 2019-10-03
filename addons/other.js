var exports = module.exports;

exports.init = function(client) {
	console.log('Initialized addon "Other".');
};

exports.message = function(client, msg) {
	if (msg.isMentioned('628419860971520001')) {
		wittyComebacks = [
			'sksksksksk',
			'yes?',
			'why ye pinging me; im just a lonely bot ;-;',
			'you need some help? well idk anything so bai',
			'i am akhil in disguise 😎',
			'no u'
		];
		num = Math.floor(Math.random() * wittyComebacks.length);
		msg.channel.send(wittyComebacks[num]);
	}
};
