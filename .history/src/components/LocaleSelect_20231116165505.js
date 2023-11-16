import { useLocale, useSetLocale } from "../contexts/LocaleContext";

function LocaleSelect(){
    const locale = useLocale();
    const setLocale = useSetLocale();

    return(
        <select>
            
        </select>
    )
}
export default LocaleSelect;