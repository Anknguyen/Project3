const { connect, connection } = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/prj3-db-dev';
connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;