
const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

// Parse incoming form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve website files
app.use(express.static(__dirname));

// Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Test backend API
app.get('/api/status', (req, res) => {
    res.json({
        success: true,
        message: 'Sandor Tescon Aqua Node.js server is working!'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Sandor Tescon Aqua website running at http://localhost:${PORT}`);
});


/* CONTACT FORM API */
app.post('/api/contact', (req, res) => {

    const {
        name,
        company,
        email,
        phone,
        solution,
        message
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
        return res.status(400).json({
            success: false,
            message: 'Please fill in all required fields.'
        });
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Please enter a valid email address.'
        });
    }

    // Log enquiry in terminal (temporary storage)
    console.log('NEW CUSTOMER ENQUIRY');

    console.log({
        name,
        company,
        email,
        phone,
        solution,
        message
    });

    // Send response to frontend
    res.status(200).json({
        success: true,
        message: 'Your enquiry has been submitted successfully!'
    });

});

