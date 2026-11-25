const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8089;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint de versión y estado
app.get('/api/info', (req, res) => {
    try {
        const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
        res.json({
            name: 'Deberes 5º Primaria',
            version: `v${pkg.version}`,
            status: 'online'
        });
    } catch (e) {
        res.json({ name: 'Deberes 5º Primaria', version: 'v1.0.0', status: 'online' });
    }
});

// Fallback a index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🎓 Servidor de Deberes 5º Primaria activo en puerto ${PORT}`);
});
