const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('../swagger.json');
const albumRoutes = require('./routes/albumRoutes');
const artistRoutes = require('./routes/artistRoutes');
const albumArtistRoutes = require('./routes/albumArtistRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/albums', albumRoutes);
app.use('/api/artists', artistRoutes);
app.use('/api/albumArtist',albumArtistRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to My Home Music Collection');
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})