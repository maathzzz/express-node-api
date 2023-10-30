require('dotenv').config()

const envs = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  SECRET: process.env.SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
};

module.exports = envs;