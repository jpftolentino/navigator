"use strict";

const express = require('express');
const router  = express.Router();

//selects all the data from users TABLE
module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex('list')
      .join('task', 'task.fk_list_id','list.list_id')
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
