export const convertUTCTimeToRelative = (utc) => {
  const createdDate = utc * 1000;
  const currentDate = new Date().getTime();
  const howLongAgo = currentDate - createdDate;

  const time = Math.abs(howLongAgo);
  let humanTime, units;

  // If there are years
  if (time > 1000 * 60 * 60 * 24 * 365) {
    humanTime = parseInt(time / (1000 * 60 * 60 * 24 * 365), 10);
    units = humanTime > 1 ? "years" : "year";
  }
  // If there are months
  else if (time > 1000 * 60 * 60 * 24 * 30) {
    humanTime = parseInt(time / (1000 * 60 * 60 * 24 * 30), 10);
    units = humanTime > 1 ? "months" : "month";
  }

  // If there are weeks
  else if (time > 1000 * 60 * 60 * 24 * 7) {
    humanTime = parseInt(time / (1000 * 60 * 60 * 24 * 7), 10);
    units = humanTime > 1 ? "weeks" : "week";
  }

  // If there are days
  else if (time > 1000 * 60 * 60 * 24) {
    humanTime = parseInt(time / (1000 * 60 * 60 * 24), 10);
    units = humanTime > 1 ? "days" : "day";
  }

  // If there are hours
  else if (time > 1000 * 60 * 60) {
    humanTime = parseInt(time / (1000 * 60 * 60), 10);
    units = humanTime > 1 ? "hours" : "hour";
  }

  // If there are minutes
  else if (time > 1000 * 60) {
    humanTime = parseInt(time / (1000 * 60), 10);
    units = "minutes";
  }

  // Otherwise, use seconds
  else {
    humanTime = parseInt(time / 1000, 10);
    units = "seconds";
  }

  return humanTime + " " + units;
};
