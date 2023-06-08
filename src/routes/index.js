import {Router} from 'express';
import __dirname from '../app.js'
import {join} from 'path';

const router = Router()
const __filename = 'index.html';
const __filenameEs = 'index-es.html';


router.get('/', (req, res) =>{
    res.sendFile(join(__dirname, 'views', __filename))
});

router.get('/porfolio-es', (req, res) =>{
    res.sendFile(join(__dirname, 'views', __filenameEs))
});

export default router;