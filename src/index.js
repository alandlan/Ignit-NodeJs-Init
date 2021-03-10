const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'Starting...'});
});

app.listen(3333);