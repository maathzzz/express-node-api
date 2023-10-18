const mongoose = require('mongoose');

module.exports = {
    async open (uri) {
        mongoose.set('strictQuery', true);
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    },

    async close() {
        await mongoose.disconnect();
    }
};