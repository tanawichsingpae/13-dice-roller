const express = require('express');
const app = express();
app.use(express.json());

app.get('/roll/d6', (req, res) => {
    res.json({ roll: Math.floor(Math.random() * 6) + 1 });
});

app.get('/roll/d20', (req, res) => {
    res.json({ roll: Math.floor(Math.random() * 20) + 1 });
});

app.post('/roll/custom', (req, res) => {
    const { sides } = req.body; res.json({ roll: Math.floor(Math.random() * sides) + 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
