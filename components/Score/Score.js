import "./Score.css";
import "../X-O/X-O.css";

let xStat = sessionStorage.getItem("xStat");
let oStat = sessionStorage.getItem("oStat");
let drawStat = sessionStorage.getItem("drawStat");

export const Score = () =>
  `
    <div id="X" class="score-name X">
X
<div id"score-stat">${xStat == null ? 0 : xStat}</div>
</div>

<div id="draws" class="score-name draw">
DRAWS
<div id"score-stat">${drawStat == null ? 0 : drawStat}</div>
</div>

<div id="O" class="score-name O">
O
<div id"score-stat">${oStat == null ? 0 : oStat}</div>
</div>

`;
