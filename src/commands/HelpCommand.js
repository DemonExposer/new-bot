const Reply = require("./Reply");

class HelpCommand {
	/**
	 * @type {Map<String, Object>}
	 */
	#commands;

	/**
	 * Informs the object about all the existing commands
	 * @param {Map<String, Object} commands all commands
	 */
	setCommands = commands => this.#commands = commands;

	/**
	 * Gives instructions about all the commands
	 * @param {String[]} args command to request info on
	 * @returns {String} instructions about all the commands
	 */
	execute(args) {
		if (args.length > 0)
			return new Reply(this.#commands[args[0]].info(), false);

		let reply = "";
		Object.entries(this.#commands).forEach(([key, command]) => reply += `\`${key}\`: ${command.info()}\n`);
		return new Reply(reply, false);
	}

	/**
	 * Gives instructions for this command
	 * @returns Instructions about this command
	 */
	info = () => "Gives instructions about all the commands or for a single command. Usage: \`-help [commandName]\`";
}

module.exports = HelpCommand;