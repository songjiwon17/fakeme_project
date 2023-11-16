import { createContext, useContext, useState } from "react";

const LocaleContext = createContext();

export function LocaleProvider(){
    const [locale, setLocale] = useState();
    return()
}