import { X, O } from "../components/X-O/X-O";

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
          console.log(oState);
        } else {
          counter++;
          cell.innerHTML = X();
          xState.push(cell.id);
          console.log(xState);
        }
      }
      winGame();
    });
  }
};

const winGame = () => {
  xState.sort(function (a, b) {
    return a - b;
  });
  oState.sort(function (a, b) {
    return a - b;
  });

  for (const win of winningStates) {
    if (win === xState) {
      console.log("Ganan X");
    } else if (win === oState) {
      console.log("Ganan O");
    } else if (counter === 9) {
      console.log("Empate");
    }
  }
};

const isEqual = () => {
    
}
