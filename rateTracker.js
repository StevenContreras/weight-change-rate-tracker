
const weightTracker = function(start, current, goal, days) {
  // debugger;
  const buffers = {
    Jump: .016,
    drop: .019,
    total: this.jump + this.drop
  }
  const change = Math.abs(start - current);
  const todaysBuffer = current * buffers.drop;
  const rate = change / days;
  
  const limit = current * 0.001 * days + todaysBuffer;
  const breakLine = start - limit;
  const rapidRate = limit / days;
  

  let rateCurrent = current;
  let rateDays = 0;
  let rateRecordDays = 0
  let record = 206;

  while (rateCurrent > goal && rateDays < 730) {
    rateDays++
    rateCurrent = rateCurrent - (rateCurrent * (rate/ rateCurrent))
    if (rateCurrent < record && rateRecordDays === 0) {
      rateRecordDays = rateDays;
    }
  }


  let fastCurrent = current;
  let fastDays = 0

  while (fastCurrent > goal && fastDays < 730) {
    fastDays++
    fastCurrent = fastCurrent - (fastCurrent * 0.001)
  }

  let slowCurrent = current;
  let slowDays = 0;

  while (slowCurrent > goal && slowDays < 730) {
    slowDays++
    slowCurrent = slowCurrent - (slowCurrent * 0.0007)
  }
  
  let recordCurrent = current;
  let recordDays = 0

  while (recordCurrent > record && recordDays < 365) {
    recordDays++
    recordCurrent = recordCurrent - (recordCurrent * 0.001)
  }

  // Projections
  let projectedCurrent = current;
  let projectedBuffer = buffers.drop;
  var projectedDays = days;

  let projectedLimit = limit; 
  let projectedBreakLine = breakLine;
  let projectedRapidRate = rapidRate;

  while (projectedRapidRate > rate && projectedDays < 365) {
    projectedDays++
    projectedCurrent = projectedCurrent - rate;
    projectedBuffer = projectedCurrent * buffers.drop;
    projectedLimit = projectedCurrent * 0.001 * projectedDays + projectedBuffer; 
    projectedBreakLine = start - projectedLimit;
    projectedRapidRate = projectedLimit / projectedDays;
  };
  
  if (projectedDays === 365) {
    projectedDays = projectedDays.toString()
    projectedDays = "more than " + projectedDays;
  };

  const info = `
  Today's:
  Average daily weight loss is ${rate}.
  Break line weight is ${breakLine}.
  Rapid average daily weight loss rate is ${rapidRate}.
  
  Projections: 
  At this rate you will reach your goal weight of ${goal}lbs in ${rateDays} days.
  The fastest you can healthily reach your goal is in ${fastDays} days.
  The slowest you want to reach your goal is in ${slowDays} days.

  At this rate you will reach your record weight of ${record}lbs in ${rateRecordDays} days.
  The fastest you can healthily reach your record is in ${recordDays} days.

  At this rate you will cross the break line in ${projectedDays - days} days.
  with a projected break line of ${projectedBreakLine}
  with a Rapid average daily weight loss rate of ${projectedRapidRate}`;

  if (change > limit) {
    return "  Rapid weight loss. Increase caloric intake. \n" + info;
  };

  return info;
}

setTimeout(function () {console.log(weightTracker(223.8, 220.4, 170, 16))}, 600);
