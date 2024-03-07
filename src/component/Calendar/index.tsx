import React from "react";
import { Dayjs } from "dayjs";
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
  const { style, value, className, locale } = props;

  // classname 合并
  const classNames = cs("calendar", props.className);

  return (
    <LocaleContext.Provider value={{ locale: locale || navigator.language }}>
      <div className={classNames} style={style}>
        <Header />
        <MonthCalendar {...props} />
      </div>
    </LocaleContext.Provider>
  );
}
