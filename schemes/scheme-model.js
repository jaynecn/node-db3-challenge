const db = require('../data/db-config');

module.exports = {
  find,
  // findById,
  // findSteps,
  // add,
  // remove,
};

function find(){
  return db('schemes');
}