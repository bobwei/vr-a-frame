import express from 'express';


export default function() {
  const app = express();
  let env = process.env.env || 'dev';

  // mount assets for dev
  if (env === 'dev') {
    var webpack = require('webpack');
    var WebpackDevServer = require('webpack-dev-server');
    var config = require('../../webpack.config');
    var proxy = require('proxy-middleware');
    var url = require('url');
    (new WebpackDevServer(webpack(config), config.devServer))
      .listen(config.port, 'localhost', function(err) {
        if (err) {
          console.log(err);
        }
      });
    app.use('/assets', proxy(url.parse(`http://localhost:${config.port}/assets`)));
  // mount assets for production
  } else {
    app.use('/assets', express.static(__dirname + '/../../dist/assets'));
  }

  return app;
}
