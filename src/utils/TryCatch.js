'use strict';

const Callback = require('./Callback');

class AsyncTryCatch {
    constructor(){}

    async tryAwait(promisseFunction, res) {
        try {
            const data = await promisseFunction

            return res.status(200).json(data);
        } catch(err) {

            console.log(err);

            return res.status(400).json(err);
        }
    }
}

module.exports = new AsyncTryCatch();