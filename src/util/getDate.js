export default function getDate(timestamp) {
  if (timestamp.getMonth() < 9) {
    return (
      dayOfWeek(timestamp.getDay()) +
      ' ' +
      timestamp.getDate() +
      '/0' +
      (timestamp.getMonth() + 1) +
      '/' +
      timestamp.getFullYear()
    );
  }
  return (
    dayOfWeek(timestamp.getDay()) +
    ' ' +
    timestamp.getDate() +
    '/' +
    (timestamp.getMonth() + 1 + '/' + timestamp.getFullYear())
  );
}
function dayOfWeek(day) {
  switch (day) {
    case 0:
      return 'Sun';
    case 1:
      return 'Mon';
    case 2:
      return 'Tues';
    case 3:
      return 'Wednes';
    case 4:
      return 'Thurs';
    case 5:
      return 'Fri';
    case 6:
      return 'Sat';
    default:
      return '';
  }
}
