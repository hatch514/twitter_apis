import express from 'express';

const app: express.Express = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With Content-Type, Accept")
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('dist'))

const router: express.Router = express.Router();
router.get('/api/imageText', (req:express.Request, res:express.Response) => {
    res.send(req.query);
    console.log('this api is fired.')
})
app.use(router);

app.listen(3000, () => {
    console.log('listening on port 3000')
});
