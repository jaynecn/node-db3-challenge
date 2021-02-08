const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
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

function add(schemeData) {
  return db('schemes')
    .insert(schemeData);
}

function addStep(stepData, id) {
  return db('steps as s')
    .join('schemes as q', 's.scheme_id', 'q.id')
    .insert(stepData)
    .where({ 'q.id': id });
}

function update(changes, id) {
  return db('schemes as q')
    .update(changes)
    .where({ 'q.id': id });
}

function remove(id) {
  return db('schemes as q')
    .where({ 'q.id': id })
    .del()
}