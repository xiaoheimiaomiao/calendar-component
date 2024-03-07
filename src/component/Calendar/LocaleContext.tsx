import React from "react";

export interface LocaleContextType {
  locale: string;
}

const LocaleContext = React.createContext<LocaleContextType>({
  locale: "zh-CN",
});
export default LocaleContext;
