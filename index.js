const nowTime = new Date();
const nowDay = nowTime.getDay();
const nowHour = nowTime.getHours();
const onAir = (nowDay == 1 || nowDay == 4) && (nowHour == 9 || nowHour == 10);
window.onload = () => {
  if (onAir) document.getElementById("onAir").innerText = "입니다.";
};
