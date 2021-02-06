const express = require('express');
const app = express();
const port = 3000;
const albumRoutes = require('./routes/albumRoutes');
const artistRoutes = require('./routes/artistRoutes');
const albumArtistRoutes = require('./routes/albumArtistRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/albums', albumRoutes);
app.use('/api/artists', artistRoutes);
app.use('/api/albumArtist',albumArtistRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})