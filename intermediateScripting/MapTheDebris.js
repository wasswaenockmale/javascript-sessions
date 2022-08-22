function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(element=>{
      element.avgAlt = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + element.avgAlt, 3) /GM))
      return element
    });
  }
  

//   return arr.map(({ name, avgAlt }) => {
//     const earth = earthRadius + avgAlt;
//     const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
//     return { name, orbitalPeriod };
//   });
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))