const express = require('express');
const app = express();
const port =  process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
  console.log('URL: http://localhost:' + port);
  console.log('Press CTRL + C to stop the server');
});

app.on('error', (err) => {
    console.error(err);
});
