import React from "react";
import "./index.scss";
import MonthCalendar from "./MonthCalendar";
import { Dayjs } from "dayjs";
import Header from "./Header";

export interface CalendarProps {
  value: Dayjs;
}
export default function Calendar(props: CalendarProps) {
  return (
    <div className="calendar">
      <Header />
      <MonthCalendar {...props} />
    </div>
  );
}
