import { useLocale, useSetLocale } from "../contexts/LocaleContext";

function LocaleSelect(){
    const locale = useLocale();
    const setLocale = useSetLocale();
    
    const handleChange = (e)=>setLocale(e.target.value);

    return(
        <select value={locale} onChange={}>
            <option></option>
        </select>
    )
}
export default LocaleSelect;