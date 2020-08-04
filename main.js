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

const heading = document.querySelector(".article__title--js");

heading.innerHTML = "JEST GIT <span>Tutaj jest span </span>";
