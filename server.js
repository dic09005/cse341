
let express = require('express')
let app = express()

app.use('/', require('./routes'))

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

