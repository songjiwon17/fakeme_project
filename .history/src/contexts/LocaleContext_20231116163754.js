import { createContext, useContext, useState } from "react";

const LocaleContext = createContext();

export function LocaleProvider({defaultValue = 'ko', children}){
    const [locale, setLocale] = useState(defaultValue);
    return(<LocaleContext.Provider>{children}</LocaleContext.Provider>)
}