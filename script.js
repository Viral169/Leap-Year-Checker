let btn = document.querySelector(".btn");
let result = document.querySelector("#result");
let year = document.querySelector("#year");

let leapyearChecker = () => {
  let checkYearr = year.value;
  if (checkYearr === "") {
    result.innerText = "👆 Please enter a year";
    return;
  }
  let checkYear = parseInt(year.value);
  if (checkYear % 4 === 0 && checkYear % 100 !== 0) {
    result.innerText = "This Year is Leap Year";
  } else {
    result.innerText = "This Year is Common Year";
  }
};

btn.addEventListener("click", leapyearChecker);
