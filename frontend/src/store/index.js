if (process.env.NODE_ENV === 'production' || (location && location.hostname !== 'localhost')) {
  module.exports = require('./store.prod');
} else {
  module.exports = require('./store.dev');
}