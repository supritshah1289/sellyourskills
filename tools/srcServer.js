import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';


const PORT = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, //do not want to see compiling message on command line
  publicPath: config.output.publicPath //defined in webpack config file
}));

app.use(require('webpack-hot-middleware')(compiler));

//server a single file using wildcard
//any request it receives return same file
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

//open browser using open package
app.listen(PORT, function(err){
  if(err){
    console.log(err);
  }else{
    open(`http://localhost:${PORT}`);
  }
});
