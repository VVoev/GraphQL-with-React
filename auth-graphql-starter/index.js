const app = require('./server/server');
const port = 4000;
app.listen(port, () => {
  console.log(`Server started and Listening on Port:${port}`);
});
