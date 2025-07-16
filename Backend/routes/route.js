const express = require('express');
const route = express.Router();
const axios = require('axios');
const { options } = require('../data/data');


route.post('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        id = Number(id);
        const { category } = req.body;
        options.url = `https://api.themoviedb.org/3/${category}/${id}?external_source=tmdb_id`;
        let data = await axios(options)
        res.send(data.data);
    } catch (err) {
        console.log(err);
        res.status(404).send('Invalid ID');
    }
})

route.get('/all/:page', async (req, res) => {
    try {

        let { page } = req.params;
        page = Number(page);
        options.url = `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`;
        let data = await axios(options)
        res.send(data.data);
    } catch (error) {
        console.log("🚀 ~ route.get ~ error:", error)
        res.json("Error in fetching file from the server");
    }
})
route.get('/movies/:page', async (req, res) => {
    let { page } = req.params;
    page = Number(page);
    options.url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`;
    let data = await axios(options)
    res.send(data.data);
})
route.get('/tv/:page', async (req, res) => {
    let { page } = req.params;
    page = Number(page);
    options.url = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=${page}`;
    let data = await axios(options)
    res.send(data.data);
})

route.post('/search/:page', async (req, res) => {
    const { page } = req.params;
    const { val, querypath } = req.body;
    options.url = `https://api.themoviedb.org/3/search/${querypath}?query=${val}&include_adult=false&language=en-US&page=${page}`
    let data = await axios(options);
    res.send(data.data);
})

/**
 * @swagger
 * tags:
 *   - name: Media_Content
 *     description: Everything about the Movie Or TV
 */

/**
 * @swagger
 * /route/{id}:
 *   post:
 *     tags:
 *       - Media_Content
 *     summary: find by their IDs
 *     description: Search an existing media by Id.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of Media to return Individual Media data
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       description: mention the media type
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MediaType'
 *     responses:
 *       '200':
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               anyOf:
 *                 - $ref: '#/components/schemas/TV'
 *                 - $ref: '#/components/schemas/Movie'
 * /route/all/{page}:
 *   get:
 *     tags:
 *       - Media_Content
 *     summary: get Some Trending Media
 *     description: Movie And TV Trending On that time
 *     parameters:
 *       - name: page
 *         in: path
 *         description: Page No To fetch Limited Data At a time
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Media' 
 *  
 * /route/movies/{page}:
 *   get:
 *     tags:
 *       - Media_Content
 *     summary: get Some Trending Movies
 *     description: Trending Movies based on recent Time 
 *     parameters:
 *       - name: page
 *         in: path
 *         description: Page No To fetch Limited Data At a time
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 * /route/tv/{page}:
 *   get:
 *     tags:
 *       - Media_Content
 *     summary: get Some Trending TV Show
 *     description: Trending TV based on recent Time 
 *     parameters:
 *       - name: page
 *         in: path
 *         description: Page No To fetch Limited Data At a time
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TV'
 * /route/search/{page}:
 *   post:
 *     tags:
 *       - Media_Content
 *     summary: Get the result on the basis of the Search Query
 *     description: Specific Name Query
 *     parameters:
 *       - name: page
 *         in: path
 *         description: Page No To fetch Limited Data At a time
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       description: Search data
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               val: 
 *                 type: string
 *                 description: Media name
 *                 example: harry potter
 *               querypath:
 *                 type: string
 *                 description: media type
 *                 example: movie
 *     responses:
 *       '200':
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Media' 
 */


module.exports = route;





