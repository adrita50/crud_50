const { Pool } = require('pg');
require('dotenv').config(); // Ensure dotenv is loaded to access the DATABASE_URL

const pool = new Pool({
    connectionString: process.env.DATABASE_URL='postgresql://neondb_owner:npg_a7Hg2dZpNEGr@ep-nameless-math-a8be4stc-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',  // Use the connection string from .env
    ssl: {
        rejectUnauthorized: false, // Required for Neon DB
    },
});

const client = pool;  // Export the client for use in server.js

module.exports = client;
