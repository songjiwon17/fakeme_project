import { createContext, useContext, useState } from "react";

const LocaleContext = createContext();

export function LocaleProvider({defaultValue = 'ko', children}){
    const [locale, setLocale] = useState(defaultValue);
    return(<LocaleContext.Provider value={{locale, setLocale}}>{children}</LocaleContext.Provider>)
}

export function useLocale(){
    const context = useContext(LocaleContext);
}