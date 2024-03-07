import React from "react";

export default function Header() {
  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <div className="calendar-header-icon">&lt;</div>
        <div className="calendar-header-value">2024 年 3 月</div>
        <div className="calendar-header-icon">&gt;</div>
        <button className="calendar-header-but">今天</button>
      </div>
    </div>
  );
}
