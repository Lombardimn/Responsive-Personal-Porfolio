import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/index.js'

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname)

app.use(express.static('public'));

app.use(indexRoutes);
app.listen(3000, () =>{
    console.log('Server runing on port', 3000);
});

export default __dirname;