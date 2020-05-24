export default function getTime(timestamp) {
  if (timestamp.getMinutes() < 10) {
    return timestamp.getHours() + ':0' + timestamp.getMinutes();
  }

  return timestamp.getHours() + ':' + timestamp.getMinutes();
}
