const express = require('express');
const router = express.Router();

module.exports = app => {

    router.get('/api/forum', (req, res) => {
        res.json({
            message: 'everything working!'
        });
        console.log('Im fetching!');
    });

    app.use(router);
}
