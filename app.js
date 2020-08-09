// onload

const time = () => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  day < 10 ? (day = "0" + day) : day;
  month < 10 ? (month = "0" + month) : month;

  hour < 10 ? (hour = "0" + hour) : hour;
  min < 10 ? (min = "0" + min) : min;
  sec < 10 ? (sec = "0" + sec) : sec;

  document.querySelector(".week-day").textContent = ` ${day}-${month}-${year} `;

  document.querySelector("#hour").textContent = `${hour} :${min} :${sec}`;

  const period = document.querySelector("#period");
  hour <= 12 ? (period.textContent = "A.M") : (period.textContent = "P.M");
};
time();
setInterval(() => {
  time();
}, 1000);
