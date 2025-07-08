const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const { slugify } = require("./function/slugify");
const { cardData } = require("./function/card data");
const settings = require("./data/settings.json")


app.set("view engine", "ejs");
app.use(express.static('static'));

app.get("/", (req, res) => {
  res.render("index", { cards: cardData, slugify });
});


app.get("/card/:id", (req, res) => {
  const card = cardData.find(
    (c) => slugify(c.id) === req.params.isim.toLowerCase()
  );
  
  if (!cardData) return res.status(404).send("Card undefiend");

  res.render("detay", { card });
});

app.listen(settings.port, () => {
  console.log(`http://localhost:${settings.port} on ready.`)
});
