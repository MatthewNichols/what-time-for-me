const DateTime = luxon.DateTime;

const local = DateTime.now();
const mine = DateTime.local().setZone(tzData.timezoneIANA);

const myCurrentTimeZone = document.getElementById("myCurrentTimeZone");
myCurrentTimeZone.innerText = `${mine.toFormat("ZZZZZ")} (${mine.toFormat("ZZZZ")})`;

const myCurrentTime = document.getElementById("myCurrentTime");
myCurrentTime.innerText = mine.toFormat("t");

const yourCurrentTimeZone = document.getElementById("yourCurrentTimeZone");
yourCurrentTimeZone.innerText = `${local.toFormat("ZZZZZ")} (${local.toFormat("ZZZZ")})`;

const yourCurrentTime = document.getElementById("yourCurrentTime");
yourCurrentTime.innerText = local.toFormat("t");