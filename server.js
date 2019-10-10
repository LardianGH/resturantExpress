// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================

var guests = [
  {
    name: "Chad Wick",
    phone: "704-442-7546",
    time: "4:30"
  },
];

var tables = [
{
  number: 1
},
{
  number: 2
},
{
  number: 3
},
{
  number: 4
},
{
  number: 5
},
]

var waiting = [

]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add.html", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/tables.html", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


// Displays all guests
app.get("/api/guests", function(req, res) {
  return res.json(guests);
});

// Create New Characters - takes in JSON input
app.post("/api/guests", function(req, res) {
 
  var newGuest = req.body;

  newGuest.routeName = newGuest.name.replace(/\s+/g, "").toLowerCase();

  console.log(newGuest);

  guests.push(newGuest);

  res.json(newGuest);
});

app.post("/tables.html", function(req, res) {
 
  $append("hi")
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("http://localhost:" + PORT);
});
