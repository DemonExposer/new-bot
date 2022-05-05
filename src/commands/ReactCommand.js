const { Message } = require("discord.js");
const Reply = require("./Reply");

class ReactCommand {
	#emojiTable = {
		"a": "🇦",
		"b": "🇧",
		"c": "🇨",
		"d": "🇩",
		"e": "🇪",
		"f": "🇫",
		"g": "🇬",
		"h": "🇭",
		"i": "🇮",
		"j": "🇯",
		"k": "🇰",
		"l": "🇱",
		"m": "🇲",
		"n": "🇳",
		"o": "🇴",
		"p": "🇵",
		"q": "🇶",
		"r": "🇷",
		"s": "🇸",
		"t": "🇹",
		"u": "🇺",
		"v": "🇻",
		"w": "🇼",
		"x": "🇽",
		"y": "🇾",
		"z": "🇿" 
	}

	/**
	 * Reacts to the latest message with the given message
	 * @param {String[]} args the given message
	 * @param {Message} msg the message requesting the command
	 */
	execute(args, msg) {
		if (args.length < 2)
			return new Reply("Too little arguments", false);

		let checkArr = new Array(26).fill(0);
		let chars = args[0].toLowerCase().split("");
		let isPossible = true;
		chars.forEach(letter => isPossible = ++checkArr[letter.charCodeAt(0) - "a".charCodeAt(0)] > 1 ? false : isPossible);
		if (!isPossible)
			return new Reply("Characters may only be used once", false);
		
		let msgId = args[1].split("/");
		msg.channel.messages.fetch(msgId[msgId.length-1])
			.then(message => chars.forEach(letter => message.react(this.#emojiTable[letter])));

		return new Reply("", true);
	}

	/**
	 * Gives instructions for this command
	 * @returns Instructions about this command
	 */
	info = () => "Reacts to the latest message with the given message. Usage: \`-react <reactMessage> <messageID | messageLink>\`";
}

module.exports = ReactCommand;