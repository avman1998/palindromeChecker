const textAreaEle = document.querySelector(".main-container textarea");
const btnEle = document.querySelector(".main-container div button");
const resultEle = document.querySelector(".main-container div #result");
btnEle.addEventListener("click", function () {
  const inputString = textAreaEle.value;
  const splittedString = inputString.split("");
  const reversedString = splittedString.reverse();
  const reverseJoinedString = reversedString.join("");
  if (inputString != "")
    resultEle.innerHTML =
      inputString === reverseJoinedString
        ? `${inputString} ✔️`
        : `${inputString} ❌`;
});
