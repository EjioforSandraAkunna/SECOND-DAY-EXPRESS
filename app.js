const express = require("express");
const app = express();

//app.get("/", (request, response, next) => response.send("hello world yupiii"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// send views/index.hbs for displaying in the browser
app.get("/", (req, res, next) => res.render("index"));

app.get("/about", (req, res, next) => {
  let data = {
    name: "Sandra",
    bootcamp: "Ironhack Web Dev",
  };
  res.render("about", data);
});

// app.get("/", (req, res, next) => {
//   let data = {
//     name: "Ironhacker",
//     lastName: "Rocking it!",
//     address: {
//       street: "Your heart",
//       number: 87,
//     },
//     cities: [
//       "Amsterdam",
//       "Barcelona",
//       "Berlin",
//       "Lisbon",
//       "Madrid",
//       "Mexico City",
//       "Miami",
//       "Paris",
//       "Sao Paulo",
//     ],
//   };

//   res.render("index", data);
// });

app.listen(3000);
