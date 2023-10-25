require('dotenv').config()

const envs = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_CLUSTER: process.env.DATABASE_CLUSTER,
    DATABASE_URL: process.env.DATABASE_URL
};

module.exports = envs;