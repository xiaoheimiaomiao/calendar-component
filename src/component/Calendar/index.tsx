import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import cs from "classnames";
import "./index.scss";
import MonthCalendar from "./MonthCalendar";
import Header from "./Header";
import LocaleContext from "./LocaleContext";

export interface CalendarProps {
  value: Dayjs;
  style?: React.CSSProperties;
  className?: string | string[];
  // 定制日期显示，会完全覆盖单元格
  dateRender?: (currentDate: Dayjs) => React.ReactNode;
  // 定制日期单元格，内容会被添加到单元格内，只会在全屏日历下生效显示
  dateInnerContent?: (currentDate: Dayjs) => React.ReactNode;
  // 国际化先关
  locale?: string;
  onChange?: (date: Dayjs) => void;
}
export default function Calendar(props: CalendarProps) {
  const { style, value, className, locale, onChange } = props;

  const [curValue, setCurValue] = useState<Dayjs>(value);

  const [curMonth, setCurMonth] = useState<Dayjs>(curValue);

  // classname 合并
  const classNames = cs("calendar", props.className);

  function changeDate(date: Dayjs) {
    setCurMonth(date);
    setCurValue(date);
    onChange?.(date);
  }

  function selectHandler(date: Dayjs) {
    changeDate(date);
  }

  function pervMonthHandler() {
    setCurMonth(curMonth.subtract(1, "month"));
  }
  function nextMonthHandler() {
    setCurMonth(curMonth.add(1, "month"));
  }

  function todayHandler() {
    const date = dayjs(Date.now());
    changeDate(date);
  }
  return (
    <LocaleContext.Provider value={{ locale: locale || navigator.language }}>
      <div className={classNames} style={style}>
        <Header
          curMonth={curMonth}
          pervMonthHandler={pervMonthHandler}
          nextMonthHandler={nextMonthHandler}
          todayHandler={todayHandler}
        />
        <MonthCalendar
          {...props}
          value={curValue}
          curMonth={curMonth}
          selectHandler={selectHandler}
        />
      </div>
    </LocaleContext.Provider>
  );
}
