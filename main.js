const firstName = "Karol";
const age = 25;
let years = 3;
const futureAge = age + years;

// Powitanie

karolAge = {
  age: 25,
  myName: "Karol",
  born: 1995,
  future: 2035,
};

function Hello(myName, age, future, born) {
  console.log(
    `Witaj użytkowniku jestem ${karolAge.myName} obencie mam ${
      karolAge.age
    } ale już w ${karolAge.future} będę miał ${
      karolAge.future - karolAge.born
    }lat `
  );
}

Hello(karolAge.myName, karolAge.age, karolAge.future, karolAge.born);

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
