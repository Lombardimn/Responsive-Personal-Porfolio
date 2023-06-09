import express from 'express';
import {join, dirname} from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
const __filename = 'index.html';
const __filenameEs = 'views/index-es.html';

app.use(express.static('docs'));
// app.use('/static', express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(join(__dirname, __filename));
});

app.get('/es', (req, res) =>{
    res.sendFile(join(__dirname, 'docs', __filenameEs));
});

app.listen(3000, () =>{
    console.log('Server runing on port', 3000);
});




