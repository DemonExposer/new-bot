#!/usr/bin/env node
const { Client, Intents } = require("discord.js");
const { HelpCommand, ReactCommand, WideCommand} = require("./requireFile");
const client = new Client(
	{
		intents: [
			Intents.FLAGS.GUILDS,
			Intents.FLAGS.GUILD_MESSAGES,
			Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
			Intents.FLAGS.DIRECT_MESSAGES
		]
	}
);

const commands = {
	"help": new HelpCommand(),
	"react": new ReactCommand(),
	"wide": new WideCommand()
}

client.on("ready", () => {
	commands["help"].setCommands(commands);
	console.log("Logged in");
});

client.on("messageCreate", async msg => {
	if (msg.content.charAt(0) !== "-")
		return;

	let msgArr = msg.content.split(" ");
	msgArr[0] = msgArr[0].substring(1);
	if (commands[msgArr[0]] === undefined)
		return;

	let reply = commands[msgArr[0]].execute(msgArr.slice(1), msg);
	if (reply.text.length > 0)
		msg.channel.send(reply.text);
	if (reply.doRemove)
		msg.delete();
});

class Bot {
	/**
	 * Logs into the bot account and starts the bot
	 * @param {String} token your bot token
	 */
	constructor(token) {
		client.login(token);
	}
}

module.exports = Bot;