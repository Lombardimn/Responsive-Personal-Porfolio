import express from 'express';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/index.js'

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static('public'));
// app.use('/static', express.static('public'));


app.use(indexRoutes);
app.listen(3000, () =>{
    console.log('Server runing on port', 3000);
});

export default __dirname;