const date = new Date();
// console.log(date.toDateString())

var nowTime = new Date(date.getTime());
var Chour = nowTime.getHours();
if (Chour < 10) {
  Chour = "0" + Chour;
}
var Cminute = nowTime.getMinutes();
if (Cminute < 10) {
  Cminute = "0" + Cminute;
}
var Csecond = nowTime.getSeconds();
if (Csecond < 10) {
  Csecond = "0" + Csecond;
}
var currentTime = +Chour + ":" + Cminute + ":" + Csecond;
console.log(currentTime);

// const moment = require("moment");

// const startTime = moment(new Date(`${date.toDateString()} 09:48:00`), `${date.toDateString()} HH:mm:ss`);
// const endTime = moment(new Date(`${date.toDateString()} 10:48:00`), `${date.toDateString()} HH:mm:ss`);

// const diff = endTime.diff(startTime, "minutes");
// console.log(diff);

// let cTime = "20:52:32";
let sTime = "11:27:32";
let eTime = "11:32:32";

console.log(currentTime <= sTime && currentTime <= eTime)

                // let prevUserData: any = await userModel.findOne({
                //   where: { Id: appointmentDetails.dataValues.UserId },
                // });
                // let prevUserAppStartTime =
                //   appointmentDetails.dataValues.Start_Time;
                // let prevUserAppEndTime = appointmentDetails.dataValues.End_Time;
                // if (
                //   currentTime <= prevUserAppStartTime &&
                //   currentTime <= prevUserAppEndTime &&
                //   prevUserData.dataValues.Status === true
                // ) {
                //   response = {
                //     Message: "Time not available",
                //   };
                // } else {}

                // try {
                //   let inactiveAllUsersArray = [];
                //   let inactiveAllUsersAppoArray: any = [];
                //   let inactiveAllUsers: any = await userModel.findAll({
                //     where: { Status: false },
                //   });
                //   if (inactiveAllUsers.length !== 0) {
                //     for (var i = 0; i < inactiveAllUsers.length; i++) {
                //       inactiveAllUsersArray.push(inactiveAllUsers[i].dataValues);
                //     }
                //   }
                //   for (var i = 0; i < inactiveAllUsersArray.length; i++) {
                //     let inactiveAllUsersAppoData: any = await appoinmentModel.findAll({
                //       where: { UserId: inactiveAllUsersArray[i].Id },
                //     });
                //     if (inactiveAllUsersAppoData.length !== 0) {
                //       inactiveAllUsersAppoArray.push(
                //         inactiveAllUsersAppoData[0].dataValues
                //       );
                //     }
                //   }
                //   console.log("///", inactiveAllUsersAppoArray, "///");
                // } catch (error: any) {
                //   console.log(error.message);
                // }