const quesBtn = document.getElementById("ques-btn");
const quesMore = document.getElementById("ques-more");

const quesBtna = document.getElementById("ques-btna");
const quesMorea = document.getElementById("ques-morea");

const quesBtnb = document.getElementById("ques-btnb");
const quesMoreb = document.getElementById("ques-moreb");

const quesBtnc = document.getElementById("ques-btnc");
const quesMorec = document.getElementById("ques-morec");

const quesBtnd = document.getElementById("ques-btnd");
const quesMored = document.getElementById("ques-mored");

const quesBtne = document.getElementById("ques-btne");
const quesMoree = document.getElementById("ques-moree");

n = true;

quesBtn.addEventListener("click", () => {
  if (n === true) {
    quesMore.style.display = "flex";
    quesBtn.style.rotate = "40deg";

    n = false;
  } else {
    if (n === false) {
      quesMore.style.display = "none";
      quesBtn.style.rotate = "0deg";

      n = true;
    }
  }
});

quesBtna.addEventListener("click", () => {
  if (n === true) {
    quesMorea.style.display = "flex";
    quesBtna.style.rotate = "40deg";

    n = false;
  } else {
    if (n === false) {
      quesMorea.style.display = "none";
      quesBtna.style.rotate = "0deg";

      n = true;
    }
  }
});

quesBtnb.addEventListener("click", () => {
  if (n === true) {
    quesMoreb.style.display = "flex";
    quesBtnb.style.rotate = "40deg";

    n = false;
  } else {
    if (n === false) {
      quesMoreb.style.display = "none";
      quesBtnb.style.rotate = "0deg";

      n = true;
    }
  }
});

quesBtnc.addEventListener("click", () => {
  if (n === true) {
    quesMorec.style.display = "flex";
    quesBtnc.style.rotate = "40deg";

    n = false;
  } else {
    if (n === false) {
      quesMorec.style.display = "none";
      quesBtnc.style.rotate = "0deg";

      n = true;
    }
  }
});

quesBtnd.addEventListener("click", () => {
  if (n === true) {
    quesMored.style.display = "flex";
    quesBtnd.style.rotate = "40deg";

    n = false;
  } else {
    if (n === false) {
      quesMored.style.display = "none";
      quesBtnd.style.rotate = "0deg";

      n = true;
    }
  }
});

quesBtne.addEventListener("click", () => {
  if (n === true) {
    quesMoree.style.display = "flex";
    quesBtne.style.rotate = "40deg";

    n = false;
  } else {
    if (n === false) {
      quesMoree.style.display = "none";
      quesBtne.style.rotate = "0deg";

      n = true;
    }
  }
});
