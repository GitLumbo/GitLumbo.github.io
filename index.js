const global = {
  calendarTime: new Date(),
};

window.onload = () => {
  if (onAirCheck()) document.getElementById("onAir").innerText = "입니다.";
  createCalender(global.calendarTime);
};

const onAirCheck = () => {
  const nowTime = new Date();
  const nowDay = nowTime.getDay();
  const nowHour = nowTime.getHours();
  const onAir = (nowDay == 1 || nowDay == 4) && (nowHour == 9 || nowHour == 10);
  return onAir;
};
const createCalender = (date) => {
  const calender = document.getElementById("calendar");
  const calBody = calender.querySelector("tbody");
  calBody.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const calRow = document.createElement("tr");
    calRow.innerHTML =
      "<td><div></div><td><div></div><td><div></div><td><div></div><td><div></div><td><div></div><td><div></div>";
    calBody.appendChild(calRow);
  }
  inputCalendarDate(calender, date);
  document.getElementById("calenderBefore").onclick = () => {
    global.calendarTime.setMonth(date.getMonth() - 1);
    createCalender(global.calendarTime);
  };
  document.getElementById("calenderNext").onclick = () => {
    global.calendarTime.setMonth(date.getMonth() + 1);
    createCalender(global.calendarTime);
  };
};

const inputCalendarDate = (calender, date) => {
  const nowTime = date;
  const nowDate = nowTime.getDate();
  const nowMonth = nowTime.getMonth() + 1;
  const firstDay = new Date(
    nowTime.getFullYear(),
    nowTime.getMonth(),
    1
  ).getDay();
  const lastDate = new Date(
    nowTime.getFullYear(),
    nowTime.getMonth() + 1,
    0
  ).getDate();
  calender.querySelector("#yearNumber").innerText = date.getFullYear();
  calender.querySelector("#monthNumber").innerText = nowMonth;
  const dateBoxs = calender.querySelectorAll("tbody td div");
  for (let i = 0; i < dateBoxs.length; i++) {
    const inputValue = i + 1 - firstDay;
    if ((inputValue > 0) & (inputValue <= lastDate)) {
      dateBoxs[i].innerText = inputValue;
      if (inputValue == nowDate && sameMonthCheck(date))
        dateBoxs[i].parentElement.id = "today";
    } else {
      dateBoxs[i].parentElement.className = "blank";
    }
  }
};

const sameMonthCheck = (date) => {
  const realDate = new Date();
  return (
    realDate.getFullYear() == date.getFullYear() &&
    realDate.getMonth() == date.getMonth()
  );
};
