const express = require('express');
const compression = require('compression');
const session = require('express-session');
const renderVM = require('./vm');

//const axios = require('axios');

const app = express();

app.use(compression());
// Register an express middleware. Learn more: http://expressjs.com/en/guide/using-middleware.html.
// app.use(
//   session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true,
//   }),
// );

app.use('/', express.static(__dirname + '/statics'));

// Define a route to render our initial HTML.
app.use(['/Main',], (req, res) => {
  // if (!req.session.visitCount) {
  //   req.session.visitCount = 0;
  // }
  // req.session.visitCount++;

  const html = renderVM({
    //visitCount: req.session.visitCount,
  });
  res.send(html);
});



app.listen(process.env.PORT, () => {
  console.info(`Fake server is running on port ${process.env.PORT}`);
});
