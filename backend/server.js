const express = require('express');
const cors = require('cors');
const pool = require('./config/database');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Test database connection route
app.get('/api/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({
            message: 'Database connected',
            timestamp: result.rows[0].now
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'Backend is running!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});