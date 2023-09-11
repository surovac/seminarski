//DEO ZA SLIKE
const slike = document.querySelectorAll("img");

slike.forEach((slika) => {
  slika.addEventListener("click", () => {
    slika.classList.toggle("promenaSlike");
  });
});

//DEO ZA CHECKBOX
const chDiz = document.getElementById("cenaDiz");
const chDev = document.getElementById("cenaDev");
const chMar = document.getElementById("cenaMar");
const btnCena = document.getElementById("btnF");
let ukupnaCena = 0;

function racunanjeCene() {
  if (chDiz.checked) ukupnaCena += 800;
  if (chDev.checked) ukupnaCena += 1500;
  if (chMar.checked) ukupnaCena += 500;

  alert(`Ukupna cena koju placate je: ${ukupnaCena}€`);
  ukupnaCena = 0;
}

btnCena.addEventListener("click", racunanjeCene);

//DEO ZA INPUT
const btnPoruka = document.getElementById("btnPor");

function ispisPoruke() {
  let poruka = document.getElementById("porukaIn").value;
  alert(`Vasa poruka: ${poruka} je poslata.`);
}

btnPoruka.addEventListener("click", ispisPoruke);
