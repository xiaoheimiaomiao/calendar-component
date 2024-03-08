import { Dayjs } from "dayjs";
import React, { useContext } from "react";
import LocaleContext from "./LocaleContext";
import allLocales from "./locale";

interface HeaderProps {
  curMonth: Dayjs;
  pervMonthHandler: () => void;
  nextMonthHandler: () => void;
  todayHandler: () => void;
}
export default function Header(props: HeaderProps) {
  const { curMonth, pervMonthHandler, nextMonthHandler, todayHandler } = props;

  const localeContext = useContext(LocaleContext);
  const CalendarContext = allLocales[localeContext.locale];

  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <div className="calendar-header-icon" onClick={pervMonthHandler}>
          &lt;
        </div>
        <div className="calendar-header-value">
          {curMonth.format(CalendarContext.formatMonth)}
        </div>
        <div className="calendar-header-icon" onClick={nextMonthHandler}>
          &gt;
        </div>
        <button className="calendar-header-but" onClick={todayHandler}>
          {CalendarContext.today}
        </button>
      </div>
    </div>
  );
}
