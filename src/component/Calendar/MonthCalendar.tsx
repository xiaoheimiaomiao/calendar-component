import React from "react";
import { CalendarProps } from ".";
import { Dayjs } from "dayjs";

interface MonthCalendarProps extends CalendarProps {}

function getAllDays(data: Dayjs) {
  // 获取当月天数
  // const daysInMonth = data.daysInMonth();
  const startDate = data.startOf("month");
  // 每月第一天星期几
  const day = startDate.day();
  console.log("day: ", day);

  // 获取一个6&7数组 6行7列
  const daysInfo: Array<{ date: Dayjs; currentMonth: boolean }> = new Array(
    6 * 7
  );

  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, "day"),
      currentMonth: false,
    };
  }

  for (let i = day; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day, "day");

    daysInfo[i] = {
      date: calcDate,
      currentMonth: calcDate.month() === data.month(),
    };
  }
  console.log("daysInfo: ", daysInfo);
  return daysInfo;
}

// 渲染
function renderDays(days: Array<{ date: Dayjs; currentMonth: boolean }>) {
  const rows = [];
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      const item = days[i * 7 + j];
      row[j] = (
        <div
          className={
            "calendar-month-body-cell" +
            (item.currentMonth ? " calendar-month-body-cell-current" : "")
          }
        >
          {item.date.date()}
        </div>
      );
    }
    rows.push(row);
  }
  return rows.map((row) => (
    <div className="calendar-month-body-row">{row}</div>
  ));
}
export default function MonthCalendar(props: MonthCalendarProps) {
  const weekList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const allDays = getAllDays(props.value);
  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weekList.map((week) => {
          return (
            <div className="calendar-month-week-list-item" key={week}>
              {week}
            </div>
          );
        })}
      </div>
      <div className="calendar-month-body">{renderDays(allDays)}</div>
    </div>
  );
}
