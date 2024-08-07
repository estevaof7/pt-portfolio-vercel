const express = require('express');
const route = express.Router();
const path = require('path');

route.get('/', (req, res) => {
    
    const isEnglish = false;
    
    res.render('index', {
        isEnglish: isEnglish
    });

});

module.exports = route; 