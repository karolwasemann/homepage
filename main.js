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

//Hamburger

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  console.log("działa");
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});
