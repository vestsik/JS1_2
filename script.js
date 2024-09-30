/* git add ., commit -m "text", push */

const listek = 12
const pocetPredstaveni = 15
const navstevnost = 174
const prijemMoje = listek * navstevnost * pocetPredstaveni

document.body.innerHTML = "prijem = " + prijemMoje

// slozite ↑ //

const prijem = 12 * 174 * 15
document.body.innerHTML += "<p>" + "prijem = " + prijem + "</p>"

/* Kata Lencova - moje koucka */

const prijem2 = prijem * 0.6 + prijem * 0.65 * 0.4
document.body.innerHTML += "<p>" + "prijem se slevami = " + prijem2 + "</p>"

