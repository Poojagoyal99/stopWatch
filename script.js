let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let getBtn = document.querySelector(".get");
let clearBtn = document.querySelector(".clear");
const countDown = document.getElementById("counting");
const resetValue = document.querySelector(".getTimer");

let startCnt = 0;
let intervalId;
const startTimer = () => {
 intervalId = setInterval(()=>{
    countDown.innerText = startCnt++;
  },1000);
};
const stopTimer = () => {
  clearInterval(intervalId);
  getTimer();
};
const resetTimer = () => {
  startCnt = 0;
  countDown.innerText = startCnt;
  clearInterval(intervalId);
};
const getTimer = () => {
  const newPara = document.createElement("p");
  newPara.innerText = `The stop timer is ${startCnt - 1}`;
  resetValue.append(newPara);
};
const clearTimer = () => {
  resetValue.innerHTML = "";
};

startBtn.addEventListener('click',startTimer);
stopBtn.addEventListener('click',stopTimer);
resetBtn.addEventListener('click',resetTimer);
getBtn.addEventListener('click',getTimer);
clearBtn.addEventListener('click',clearTimer);