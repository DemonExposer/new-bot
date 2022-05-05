/**
 * The class that is returned by every command
 */
class Reply {
	/**
	 * @type {String}
	 */
	text;
	/**
	 * @type {Boolean}
	 */
	doRemove;

	/**
	 * @param {String} text the text which should be sent
	 * @param {Boolean} doRemove whether the caller's message should be removed
	 */
	constructor(text, doRemove) {
		this.text = text;
		this.doRemove = doRemove;
	}
}

module.exports = Reply;