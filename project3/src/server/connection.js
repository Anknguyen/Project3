const { connect, connection } = require('mongoose');
const uri = 'mongodb://localhost:27017/prj3-db';
connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
