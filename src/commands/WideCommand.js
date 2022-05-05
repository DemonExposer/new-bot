const Reply = require("./Reply");

class WideCommand {
	/**
	 * Converts text to W I D E text
	 * @param {String[]} args text to be converted
	 * @returns {String} W I D E text
	 */
	execute = args => args == 0 ? new Reply("Too little arguments", false) : new Reply(args.map(word => word.toUpperCase().split("").join(" ")).join("  "), true);

	/**
	 * Gives instructions for this command
	 * @returns Instructions about this command
	 */
	info = () => "Makes a message W I D E. Usage: \`-wide <message>\`";
}

module.exports = WideCommand;