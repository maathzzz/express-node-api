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

// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.on('connected', () => console.log('MongoDB connected'));
