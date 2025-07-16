const express = require('express');
const app = express();
const knex = require('./Model/knex');
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');
const cors = require('cors');
const route = require('./routes/route');


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

app.use('/route', route);

const swaggerUi = require('swagger-ui-express');

const YAML = require('yamljs');
const schema = YAML.load(path.join(__dirname, 'docs/schema.yaml'));

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: { title: 'My API', version: '3.0.0' },
        components: schema.components
    },
    apis: [path.join(__dirname, 'routes/*.js')],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
// console.log(swaggerSpec.paths);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



// app.get('/newTable', async (req, res) => {
//     await knex.raw(`
//             CREATE TABLE IF NOT EXISTS users (
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             name VARCHAR(100),
//             email VARCHAR(100) UNIQUE
//             )`);
//     res.send('table Created');
// })

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server has been Created at Port ${PORT}`);
    console.log('Swagger site link', `http://localhost:${PORT}/docs`);
})
