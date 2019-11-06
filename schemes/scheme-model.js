const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  // add,
  // remove,
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes as s')
    .where({ 's.id': id });
}

function findSteps(id) {
  return db('schemes as q')
    .join('steps as s', 's.scheme_id', 'q.id')
    .select('s.id', 'q.scheme_name', 's.step_number', 's.instructions')
    .orderBy('s.step_number')
    .where({ 'q.id': id});
}