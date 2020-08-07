`alert('Siemano!')`;

const firstName = "Karol";
const age = 25;
let years = 3;
const futureAge = age + years;

console.log(
  `Cześć nazywam się ${firstName} obecnie mam ${age}lat ale za ${years} lata będę miał już ${
    age + years
  } lat/a.`
);

// dodanie pustego paragrafu i wypełnienie go

const heading = document.querySelector(".article__title--js");
const emptyParagraph = document.querySelector(".article_description--js");

heading.innerHTML = "JEST GIT <span>Tutaj jest span </span>";
emptyParagraph.innerHTML = `Pusty paragraf wypełniony JS-em ;)`;

// Kalkluator moje przyszłego wieku

function calculate(age, years) {
  console.log(`Teraz mam ${age} ale za ${years} będę miał ${age + years}`);
}
calculate(age, years);

// zmiana contentu funkcja

function createContent(querySelectorContent, content) {
  element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(
  ".main-header__title--js",
  "Nowy content wcześniej Prywatny notatnik"
);
