const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();

let port = process.env.PORT;

app.listen(port, () => {
  console.log("server online port " + port);
});

app.use(express.static("public"));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "layouts/mainlayout.ejs");

if (!app.locals.title) {
  app.locals.title = "Default Title";
}

app.get("/", (req, res) => {
  let folder = "./quran-json/surah";
  let numberSurah = Math.floor(Math.random() * 115);
  let surahFile = folder + "/" + numberSurah + ".json";
  let surahReq = require(surahFile);
  let surah = surahReq[numberSurah];
  let jumlahAyat = Object.keys(surah.text).length;
  let randomAyat = Math.floor(Math.random() * jumlahAyat + 1);
  let Ayat = surah.text[randomAyat];
  let ayatTranslate = surah.translations.id.text[randomAyat];

  // displayer
  let displaySurah = surah.name + " " + surah.name_latin;
  let displayNumberVerse = randomAyat;
  let displayAyat = Ayat;
  let displayTranslate = ayatTranslate;

  res.render("home", {
    title: "Home Page",
    displaySurah,
    displayNumberVerse,
    displayAyat,
    displayTranslate,
  });
});
