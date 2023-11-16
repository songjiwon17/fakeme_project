import { useLocale } from "../contexts/LocaleContext";

const dict = {
    ko: {
        'subscribe button' : '구독하기',
        'company button' : '회사소개',
    },

    en: {
        'subscribe button' : 'Sub',
        'company button' : 'Company',
    }
}
function useTranslate(){
    const locale = useLocale();
    const translate = (key)=>dict[locale][key] || '';
    return translate;
}
export default useTranslate;