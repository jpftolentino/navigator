"use strict";

const express = require('express');
const router  = express.Router();

//selects all the data from users TABLE
module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex.select('*')
      .from('list')
      .join('users', {'list.fk_users_id': 'users.id'})
      .join('task', {'list.list_id': 'task.fk_list_id'})
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
