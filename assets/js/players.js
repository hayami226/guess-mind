import { disableChat, enableChat } from "./chat";
import {
  disableCanvas,
  enableCanvas,
  hideControls,
  resetCanvas,
  showControls,
} from "./paint";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");
const timer = document.getElementById("jsTimer");

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElement);
  });
};

const setNotify = (text) => {
  notifs.innerText = "";
  notifs.innerText = text;
};

const setTimer = (time) => {
  timer.innerText = `Timer : ${time}`;
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  setNotify("");
  disableCanvas();
  hideControls();
  enableChat();
  setNotify("What painting is it?");
};
export const handleLeaderNotif = ({ word }) => {
  enableCanvas();
  showControls();
  disableChat();
  setNotify(`You are the leader, paint: ${word}`);
};
export const handleGameEnded = () => {
  setNotify("Game ended.");
  disableCanvas();
  hideControls();
  resetCanvas();
  timer.innerText = "";
};

export const handleGameStarting = () => setNotify("Game will start soon");
export const handleTimer = ({ time }) => setTimer(time);
