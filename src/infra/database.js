const mongoose = require('mongoose');

module.exports = {
    async open (uri) {
        // mongoose.set('strictQuery', true);
        await mongoose.connect(uri);
    },

    async close() {
        await mongoose.disconnect();
    }
};