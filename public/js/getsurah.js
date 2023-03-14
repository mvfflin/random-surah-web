function getSurah() {
  let folder = "../../quran-json/surah";
  let randomNumberSurah = Math.floor(Math.random() * 115);
  let randomSurah = folder + "/" + randomNumberSurah + ".json";
  console.log(randomSurah[randomNumberSurah].name_latin);
}
