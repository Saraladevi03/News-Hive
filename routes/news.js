const express = require('express');
const axios = require('axios');
const newsr = express.Router();
const moment = require('moment');

const API_KEY = process.env.NEWS_API_KEY;

newsr.get('/', async (req, res) => {
    try {
        const url = `https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&language=en&apiKey=${API_KEY}`;
        const response = await axios.get(url);
        res.render('news', { articles: response.data.articles });
    } catch (error) {
        console.error('Error fetching default news:', error.message);
        res.render('news', { articles: [] });
    }
});

newsr.post('/search', async (req, res) => {
    const search = req.body.search;
    try {
        const url = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&language=en&apiKey=${API_KEY}`;
        const response = await axios.get(url);
        res.render('news', { articles: response.data.articles });
    } catch (error) {
        console.error('Error fetching search results:', error.message);
        res.render('news', { articles: [] });
    }
});

newsr.get('/category/:type', async (req, res) => {
    const category = req.params.type;
    try {
        const url = `https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&language=en&apiKey=${API_KEY}`;
        const response = await axios.get(url);
        res.render('news', { articles: response.data.articles });
    } catch (error) {
        console.error(`Error fetching ${category} news:`, error.message);
        res.render('news', { articles: [] });
    }
});

module.exports = newsr;
