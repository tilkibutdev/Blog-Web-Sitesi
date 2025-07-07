const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const PORT = 3000; //Port'u ayarlamayı unutmayın :)
app.set("view engine", "ejs");
app.use(express.static("public"));

const kartVerisi = JSON.parse(fs.readFileSync("data/kartlar.json", "utf-8")); //kart bilgilerini json ile al

// URL uyumlu hale getirmek için
function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

// Ana sayfa (views/index.ejs)
app.get("/", (req, res) => {
  res.render("index", { kartlar: kartVerisi, slugify });
});

// Detay sayfası (sayfa linkini oto yapar başlığa göre) (views/index.ejs)
app.get("/kart/:isim", (req, res) => {
  const kart = kartVerisi.find(
    (k) => slugify(k.isim) === req.params.isim.toLowerCase()
  );

  if (!kart) return res.status(404).send("Kart bulunamadı");

  res.render("detay", { kart });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT} çalışıyor.`));
