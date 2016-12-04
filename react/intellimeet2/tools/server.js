import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config';

const app = express();
const port = 9000;

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
    noInfo : true,
    public : config.output.publicPath
}));

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    if(err) {
        console.log("Error",err);
    } else {
        console.log("Server listening on 9000");
        open("http://localhost:9000");
    }

});

