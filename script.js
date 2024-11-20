let answerListNOVA = document.querySelectorAll(".answerContainer");
let buttonListNOVA = document.querySelectorAll(".plusQuestion");

buttonListNOVA.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (answerListNOVA[index].style.display === "none") {
      answerListNOVA.forEach((item) => {
        item.style.display = "none";
      });
      buttonListNOVA.forEach((item) => {
        item.src = "assets/images/icon-plus.svg";
      });
      button.src = "assets/images/icon-minus.svg";
      answerListNOVA[index].style.display = "block";
    } else {
      button.src = "assets/images/icon-plus.svg";
      answerListNOVA[index].style.display = "none";
    }
  });
});
