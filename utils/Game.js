import { X, O } from "../components/X-O/X-O";
import { WinMessage } from "../components/WinMessage/WinMessage";

let counter = 0;

const xState = [];
const oState = [];
const winningStates = [
  // Rows
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],

  // Columns
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],

  // Diagonal
  ["0", "4", "8"],
  ["2", "4", "6"],
];

export const printCell = (cells) => {
  for (const cell of cells) {
    cell.addEventListener("click", (event) => {
      if (cell.innerText == "") {
        if (counter % 2 == 0) {
          counter++;
          cell.innerHTML = O();
          oState.push(cell.id);
        } else {
          counter++;
          cell.innerHTML = X();
          xState.push(cell.id);
        }
      }
      winGame();
    });
  }
};

const winGame = () => {
  let xStat = sessionStorage.getItem("xStat");
  let oStat = sessionStorage.getItem("oStat");
  let drawStat = sessionStorage.getItem("drawStat");

  for (const win of winningStates) {
    if (win.every((e) => xState.includes(e))) {
      WinMessage("X");
      xStat++;
      sessionStorage.setItem("xStat", xStat);
    } else if (win.every((e) => oState.includes(e))) {
      WinMessage("O");
      oStat++;
      sessionStorage.setItem("oStat", oStat);
    } else if (counter === 9) {
      WinMessage("Draw");
      drawStat++;
      sessionStorage.setItem("drawStat", drawStat);
      break;
    }
  }
};
