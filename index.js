import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import mens from "./Model/userModel.js";
import lemon from "./Model/Lemon.js"
//app config
const app = express();
app.use(express.json());
app.use(cors());
const connection__url =
  "mongodb+srv://nadishkumar:yatvik@cluster0.kp8bt.mongodb.net/nadishkumar?retryWrites=true&w=majority";
const port = process.env.PORT || 8001;
//db config
mongoose.connect(connection__url);
//api endpoint
app.get("/", (req, res) => {
  res.status(200).send("hello nadish");
});

// app.post("/form", (req, res) => {
//   var dbdata = req.body;
//   console.log(dbdata);
//   post.create(dbdata, (err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(201).send(data);
//     }
//   });
// });

//post the form details
app.post("/form", (req, res) => {
  var dbcard = req.body;
console.log(dbcard)
  lemons.create(dbcard, (err, data) => {
    if (err) {
      res.status(500).console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//get cards details
app.post("/cards", (req, res) => {
  console.log(req.body);

  lemon.find(req.body, (err, data) => {
    if (err) {
      res.status(500).console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//user view
app.get("/userslist", (req, res) => {
  var dbcard = req.body;
  mens.find(dbcard, (err, data) => {
    if (err) {
      res.status(500).console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
});
//user added
app.post("/usersadded", (req, res) => {
  var dbcard = req.body;
  mens.create(dbcard, (err, data) => {
    if (err) {
      res.status(500).console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listener
app.listen(port, () => console.log(`listing in the ${port}`));
