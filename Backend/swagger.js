const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });


function CallSwagger() {
    const doc = {
        info: { title: 'My API', description: 'Auto-generated docs' },
        servers: [{ url: 'http://localhost:5000' }],
    };

    const outputFile = './swaggerContent.yaml';
    const routes = ['./server.js'];

    swaggerAutogen(outputFile, routes, doc).then(() => {
        console.log('✅ swagger-output.json generated');
    });
}

module.exports = CallSwagger;