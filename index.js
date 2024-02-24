const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

//when passing a callback, code in iss.js must have either a null on error arg or ip arg
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('165.140.231.51', (error, coords) => {
//   if (error) {
//     console.log(`It didnt work :(`, error);
//     return;
//   }

//   console.log(`It worked?! Returned coordinates`, coords);
// });

// fetchISSFlyOverTimes({ latitude: 51.0486151, longitude: -114.0708459 }, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:', passTimes);
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
