import "./WinMessage.css";
import "../X-O/X-O.css";

export const WinMessage = (player) => {
  const winmsg = document.querySelector("main");

  if (player == "Draw") {
    winmsg.innerHTML = `
    <div class="win-msg">
     <span class="${player}">${player}</span>
    <button id="restart">Restart</button>
    </div>
    `;
  } else {
    winmsg.innerHTML = `
    <div class="win-msg">
    Win <span class="${player}">${player}</span>Congrats!
    <button id="restart">Restart</button>
    </div>
    `;
  }

  restartGame();
};

const restartGame = () => {
  const restart_btn = document.querySelector("#restart");

  restart_btn.addEventListener("click", (event) => {
    location.reload();
  });
};
