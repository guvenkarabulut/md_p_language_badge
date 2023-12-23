const express = require('express');
const getSvgRoutes = require('./src/routes/getSvgRoutes');
const badgeRoutes = require('./src/routes/badgeRoutes');
const app = express();
const port = 3000;

// app.use('/neofetch', getSvgRoutes);
app.use('/badge', badgeRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
