import { useLocale, useSetLocale } from "../contexts/LocaleContext";

function LocaleSelect(){
    const locale = useLocale();
    const setLocale = useSetLocale();

    return(
        <select>
            <option></option>
        </select>
    )
}
export default LocaleSelect;