import { useLocale, useSetLocale } from "../contexts/LocaleContext";

function LocaleSelect(){
    const locale = useLocale();
    const setLocale = useSetLocale();
    
    const handleChange = (e)=>setLocale(e.target.value);

    return(
        <select className='lang' value={locale} onChange={handleChange}>
            <option value='ko'>KOREA ▼</option>
            <option value='en'>ENGLISH ▼</option>
        </select>
    )
}

export default LocaleSelect;