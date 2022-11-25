import "./style.css";

import { Title } from "./components/Title/Title";
import { Board } from "./components/Board/Board";
import { Score } from "./components/Score/Score";
import { Footer } from "./components/Footer/Footer";

import * as Game from "./utils/Game";
import { setStats } from "./utils/setStats";

setStats();

const header = document.querySelector("header");
header.innerHTML = Title();

const main = document.querySelector("main");
main.innerHTML = Board();

const score = document.querySelector("#stats");
score.innerHTML = Score();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

const cells = document.querySelectorAll("div.grid-cell");
Game.printCell(cells);
