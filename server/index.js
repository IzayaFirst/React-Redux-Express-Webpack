import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../webpack.config.dev';
let app = express();
app.use(webpackMiddleware(webpack(webpackConfig) , {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(webpack(webpackConfig)));
app.get('/*' , (req , res) =>{
  res.sendFile(path.join(__dirname , './index.html'));
});
app.listen(3000 , ()=> console.log('running on localhost:3000'
));
