const convertDateInTime = (date: string) => {
  var time = new Date(date);
  return time.getHours() + ':' + time.getMinutes();
};

export {convertDateInTime};
