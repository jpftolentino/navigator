"use strict";

require('dotenv').config();

const PORT          = process.env.PORT || 8080;
const ENV           = process.env.ENV || "development";
const express       = require("express");
const bodyParser    = require("body-parser");
const sass          = require("node-sass-middleware");
const app           = express();
const cookieSession = require("cookie-session");
const bcrypt        = require("bcrypt");

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
const taskRoutes = require("./routes/task");

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

app.use(cookieSession({
  name: 'session',
  keys: ["key 1"],
  maxAge: 24 * 60 * 60 * 1000
}));

// Mounts list resource to url
app.use("/api/users", usersRoutes(knex));

// Mounts tasks resource to url
app.use("/api/task", taskRoutes(knex));

// Home page
app.get("/", (req, res) => {
  let user_id = req.session.user_id
  res.render('index')
  res.render("index");
});

// List
app.get("/list/:id", (req, res) => {
  let sessionID = { sessID:req.params.id};
  res.render("list_show", sessionID);
});

// --> Login & Registration Logic <-- //

// Login
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  let loginCredentials = false
  let email = req.body.email
  let password = req.body.password

  if (!email || !password) {
    loginCredentials = false;
    res.status(401).send('Please enter a valid email/password')
    return
  }

  knex.select().table('users')
  .then((result) => {
    for (let user of result) {
      if (email === user.email) {
        if (bcrypt.compareSync(password, user.password)) {
          loginCredentials = true
          let user_email = email;
          knex('users')
          .returning('id')
          .where('email', user_email)
          .then((user) => {
            req.session.user_id = user[0].id
            res.redirect('/list')
          })
        }
      }
    }
  })
})

// Register
app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  let invalidFormSubmit = false
  let name = req.body.name
  let email = req.body.email
  let password = req.body.password
  let handle = req.body.handle

  if (!email || !password) {
    let invalidFormSubmit = true
    res.status(401).send('Please enter a valid email/password')
    return
  }

  knex.select().table('users')
  .then((result) => {
    for (let user of result) {
      if (email === user.email) {
        let invalidFormSubmit = true
        res.status(403).send('This email is already registered')
        return
      }
    }
  })

  if (!invalidFormSubmit) {
    knex('users')
      .returning('id')
      .insert({
        name: name,
        email: email,
        password: bcrypt.hashSync(password, 10),
        handle: handle
      })
      .then((user) => {
        //res.json(results);
        req.session.user_id = user[0];
        res.redirect("/list")
    });
  }
});

// Logout
app.get("/logout", (req, res) => {
  req.session = null;
  res.redirect('/');
});

// --><-- //


// --> Users Requests <-- //

// User Profile Page
app.get("/users", (req, res) => {
  res.render("users");
  // knex('users')
  //   .select('*')
  //   .where('id', 1)
  //   .then((results) => {
  //     res.json(results);
  //   })
});

// Display Users Lists on User Page
app.get("/users/myList", (req, res) => {
  knex('list')
    .select('*')
    .where('fk_users_id', 1)
    .then((results) => {
      res.json(results);
    })
})

// User Create List Page
app.get("/newList", (req, res) => {
  res.render("newList");

})

// User Generates a list
app.post("/newList", (req, res) => {
  let user = 1
  let title = req.body.title
  let category = req.body.category
  let time = req.body.time

  knex('list')
    .insert({
      fk_users_id: user,
      title: title,
      category: category,
      time: time
    })
    .then((result) => {
      res.redirect('/newList')
    })

});
// --><-- //

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
