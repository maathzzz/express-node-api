const mongoose = require('mongoose');

module.exports = {
    async open(uri) {
        await mongoose.connect(uri);
    },

    async close() {
        await mongoose.disconnect();
    }
};