const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {getStrawhats, deleteStrawhat, createStrawhat, updateBounty} = require('./controller');

app.get('/api/strawhats', getStrawhats)
app.delete('/api/strawhats/:id', deleteStrawhat)
app.post('/api/strawhats', createStrawhat)
app.put('/api/strawhats/:id', updateBounty)

app.listen(5501, () => {console.log('Listening on port 5501')})