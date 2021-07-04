displayDate()

function displayC() {
  const refresh = 1000;
  time = setTimeout('displayDate()', refresh);
}

function displayDate() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth()+1;
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  if (day < 10) {day = '0' + day};
  if (month < 10) {month = '0' + month};
  if (hour < 10) {hour = '0' + hour};
  if (min < 10) {min = '0' + min};
  if (sec < 10) {sec = '0' + sec};
  let strDate = `${day}/${month}/${date.getFullYear()} `;
  strDate = strDate + `- ${hour}:${min}:${sec}`;
  document.getElementById('myDate').innerHTML = strDate;
  displayC();
}