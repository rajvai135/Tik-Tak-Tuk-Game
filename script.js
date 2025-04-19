let boxes = document.querySelectorAll(".box");
let btn1 = document.querySelector("#reset");
let btn2 = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;

let winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "o";
      box.style.color = "green";
      turno = false;
    } else {
      box.innerText = "x";
      box.style.color = "red";
      turno = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

let checkwinner = () => {
  for (pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        console.log("winner", pos1val);

        showWinner(pos1val);
      }
    }
  }
};

let showWinner = (winner) => {
  msg.innerText = `Congratulation, winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};

disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

resetGame = () => {
  turno = true;
  enableboxes();
  msgcontainer.classList.add("hide");
};

btn2.addEventListener("click", resetGame);
btn1.addEventListener("click", resetGame);
