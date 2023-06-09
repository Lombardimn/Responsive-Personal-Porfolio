import {Router} from 'express';
import {join} from 'path';
import path from 'path';
import __dirname from '../app.js';

const router = Router()
const __filename = 'index.html';
const __filenameEs = 'index-es.html';
// const __dirPrincipal = path.resolve();

router.get('/', (req, res) =>{
    res.sendFile(join(__dirname, 'views', __filename))
});

router.get('/porfolio-es', (req, res) =>{
    res.sendFile(join(__dirname, 'views', __filenameEs))
});

export default router;