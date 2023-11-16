import { useLocale } from "../contexts/LocaleContext";

const dict = {
    ko: {
        'subscribe button' : '구독하기',
        'company button' : '회사소개',
        'member button' : '멤버소개',
        'title_01' : 
        '페이크미는 아름다움의 다양함을 환기시키는 흥미로운 브랜드 입니다.',
    },

    en: {
        'subscribe button' : 'Sub',
        'company button' : 'Company',
        'member button' : 'Member',
        'title_01' : 
        'FAKEMe is an interesting brand that evokes the variety of beauty.',
    }
}
function useTranslate(){
    const locale = useLocale();
    const translate = (key)=>dict[locale][key] || '';
    return translate;
}
export default useTranslate;