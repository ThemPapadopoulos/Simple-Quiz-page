(function () {
  correct = 0;

  correctChoise = document.querySelectorAll(".correct"); // class correct selector
  listItem = document.querySelectorAll("li"); // li selector
  lists = document.querySelectorAll("ul"); // ul selector
  result = document.getElementById("result");


//! if correct

  for (let i = 0; i < correctChoise.length; i++) {
    const element = correctChoise[i];
    const para = document.createElement("span");
    var node = document.createTextNode("correct!");

    element.addEventListener("click", function () {
      para.appendChild(node);
      element.appendChild(para);
      element.parentElement.className += " clicked";
      element.style.backgroundColor = "green";
      return correct++;
    });
  }

//! put  class .wrong to  "li" that has no class

  for (let i = 0; i < listItem.length; i++) {
    const element = listItem[i];
    wrong = "wrong";
    if (element.classList == "") {
      element.className += " wrong";
    }
  }

//! if wrong

  wrongChoise = document.querySelectorAll(".wrong");

  for (let j = 0; j < wrongChoise.length; j++) {
    const element = wrongChoise[j];
    const para = document.createElement("span");
    var node2 = document.createTextNode("wrong!");

    element.addEventListener("click", function () {
      para.appendChild(node2);
      element.appendChild(para);
      element.parentElement.className += "clicked";
      element.style.backgroundColor = "red";
    });
  }
})();




