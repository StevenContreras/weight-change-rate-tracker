
const weightTracker = function(start, current, days) {
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
  At this rate you will cross the break line in ${projectedDays} days.
  with a projected break line of ${projectedBreakLine}
  with a Rapid average daily weight loss rate of ${projectedRapidRate}`;

  if (change > limit * days) {
    return "  Rapid weight loss. Increase caloric intake. " + info;
  };

  return info;
}

setTimeout(function () {console.log(weightTracker(223.8, 221.8, 3))}, 500);
