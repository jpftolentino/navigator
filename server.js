"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes,
// yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// List
app.get("/list", (req, res) => {
  res.render("list");
});

// Main
app.get("/main", (req, res) => {
  res.render("main");
});

// Login
app.get("/login", (req, res) => {
  res.render("login");
});

// Register
app.get("/register", (req, res) => {
  res.render("register");
});

// User Create Table Page
app.get("/users", (req, res) => {
  res.render("users");
});

// User Generates a list
app.post("/users", (req, res) => {

});

app.post("/register", (req, res) => {
  let name = req.body.name
  let email = req.body.email
  let password = req.body.password
  let handle = req.body.handle
  knex('users')
    .returning('id')
    .insert({
      name: name,
      email: email,
      password: password,
      handle: handle
    })
    .then((results) => {
      res.json(results);
  });
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
