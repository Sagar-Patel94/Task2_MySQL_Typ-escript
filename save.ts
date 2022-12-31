// static createAppointment = async (req: Request, res: Response) => {
//     let response;
//     try {
//       const date = new Date();
//       var nowTime = new Date(date.getTime());
//       var Chour: any = nowTime.getHours();
//       if (Chour < 10) {
//         Chour = "0" + Chour;
//       }
//       var Cminute: any = nowTime.getMinutes();
//       if (Cminute < 10) {
//         Cminute = "0" + Cminute;
//       }
//       var Csecond: any = nowTime.getSeconds();
//       if (Csecond < 10) {
//         Csecond = "0" + Csecond;
//       }
//       var currentTime = +Chour + ":" + Cminute + ":" + Csecond;

//       let userData: any = await userModel.findByPk(req.body.userId);

//       let appointmentDetails: any = await appoinmentModel.findOne({
//         where: { UserId: req.body.userId },
//         order: [["Id", "DESC"]],
//       });

//       let prevAppointmentDetails: any = await appoinmentModel.findOne({
//         order: [["Id", "DESC"]],
//       });

//       let prevUserData: any, prevUserAppStartTime, prevUserAppEndTime;
//       if (prevAppointmentDetails) {
//         prevUserData = await userModel.findOne({
//           where: { Id: prevAppointmentDetails.dataValues.UserId },
//         });
//         prevUserAppStartTime = prevAppointmentDetails.dataValues.Start_Time;
//         prevUserAppEndTime = prevAppointmentDetails.dataValues.End_Time;
//       }

//       let status: any = res.locals;

//       const startTime = moment(
//         new Date(`${date.toDateString()} ${req.body.start_time}`),
//         `${date.toDateString()} HH:mm:ss`
//       );
//       const endTime = moment(
//         new Date(`${date.toDateString()} ${req.body.end_time}`),
//         `${date.toDateString()} HH:mm:ss`
//       );
//       let diff: number = endTime.diff(startTime, "seconds");

//       if (userData) {
//         if (status === true) {
//           if (
//             currentTime <= req.body.start_time &&
//             currentTime <= req.body.end_time
//           ) {
//             if (
//               appointmentDetails &&
//               appointmentDetails.dataValues.Date === date.toDateString()
//             ) {
//               response = {
//                 Message: "User can book only 1 appointment per day",
//               };
//             } else {
//               if (diff <= 3600) {
//                 if (
//                   req.body.start_time >= prevUserAppStartTime &&
//                   req.body.end_time <= prevUserAppEndTime &&
//                   prevUserData.dataValues.Status === true
//                 ) {
//                   response = {
//                     Message: "Time not available",
//                   };
//                 } else {
//                   let appointmentData = await appoinmentModel.create({
//                     UserId: req.body.userId,
//                     Name: userData.dataValues.Name,
//                     Product: req.body.product,
//                     Price: req.body.price,
//                     Contact: req.body.contact,
//                     Date: date.toDateString(),
//                     Current_Time: currentTime,
//                     Start_Time: req.body.start_time,
//                     End_Time: req.body.end_time,
//                   });
//                   response = {
//                     Message: "Appointment successfully created",
//                     Status: 200,
//                     Data: appointmentData,
//                   };
//                 }
//               } else {
//                 response = {
//                   Message: "End time must be less than 1 hour from start time",
//                 };
//               }
//             }
//           } else {
//             response = {
//               Message: "Invalid time",
//             };
//           }
//         } else {
//           response = {
//             Message: "Inactive user can't book an appointment",
//           };
//         }
//       } else {
//         response = {
//           Message: "User not found, please check Id",
//         };
//       }
//       return res.status(200).json(response);
//     } catch (error: any) {
//       response = {
//         Message: error.message,
//         Status: 400,
//         Data: null,
//       };
//       return res.status(400).json(response);
//     }
//   };