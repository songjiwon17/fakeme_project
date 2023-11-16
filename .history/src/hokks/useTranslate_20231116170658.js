import { useLocale } from "../contexts/LocaleContext";

const dict = {
    ko: {
        'subscribe button' : '구독하기',
    },

    en: {
        'subscribe button' : 'SUBSCRIBE',
    }
}
function useTranslate(){
    const locale = useLocale();
    const translate = (key)=>dict[locale][key] || '';
}
export default useTranslate;