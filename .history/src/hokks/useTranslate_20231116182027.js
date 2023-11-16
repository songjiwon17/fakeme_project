import { useLocale } from "../contexts/LocaleContext";

const dict = {
    ko: {
        'subscribe button' : '구독하기',
        'company button' : '회사소개',
        'member button' : '멤버소개',
    },

    en: {
        'subscribe button' : 'Sub',
        'company button' : 'Company',
        'member button' : 'Member',
    }
}
function useTranslate(){
    const locale = useLocale();
    const translate = (key)=>dict[locale][key] || '';
    return translate;
}
export default useTranslate;