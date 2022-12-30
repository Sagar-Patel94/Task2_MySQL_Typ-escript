const date = new Date();
// console.log(date.toDateString())

// var nowTime = new Date(date.getTime());
// var Chour = nowTime.getHours();
// var Cminute = nowTime.getMinutes();
// var Csecond = nowTime.getSeconds();
// var currentTime = (+ Chour + ":" + Cminute + ":" + Csecond);
// console.log(currentTime)

const moment = require("moment");

const startTime = moment(new Date(`${date.toDateString()} 09:48:00`), `${date.toDateString()} HH:mm:ss`);
const endTime = moment(new Date(`${date.toDateString()} 10:48:00`), `${date.toDateString()} HH:mm:ss`);

const diff = endTime.diff(startTime, "minutes");
console.log(diff);

// let cTime = "20:52:32";
// let sTime = "19:52:32";
// let eTime = "20:52:32";

// console.log(sTime <= eTime)