import { useLocale } from "../contexts/LocaleContext";

const dict = {
    ko: {
        'subscribe button' : '구독하기',
        'company button' : '회사소개',
        'member button' : '멤버소개',
        'title_01' : 
        '페이크미는 아름다움의 다양함을 환기시키는 흥미로운 브랜드 입니다.',
        'title_02' :
        '가림과 변화, 시선과 응시',
        'txt_01':
        '우리는 디자인을 하고 제품을 만들어 냅니다. 제품은 아름다워야 하며, 디자인은 선의(善意)를 가지고 있어야 합니다. 디자인이 가진 직접적인 선의는 최신 트랜드를 홍보하는 것이 아니라, 폭넓고 다양한 아름다움에 대해 이야기하는 것이라 믿습니다. 그로써 미(美)의 기준을 넓혀갈 수 있게 도움을 주는 것입니다. 그렇게 얻은 아름다움에 대한 절차의 정당성을 확보하고, 정통성을 가질 수 있게 하는 것. 이것이 페이크미가 하고 있는 일입니다.',
        'txt_02':
        '아이웨어는 주체와 타자사이에 존재하는 제3의 요소입니다. 그렇기에 아이웨어는 주체를 보고 있는 타자와 타자에게 보여지는 주체와의 관계 속에서만 기능합니다. 위와 같은 관계의 특성을 시각화함으로 "가림과 변화", "시선과 응시"의 의미를 제품과 디자인으로 표현합니다. 이러한 페이크미의 행동이 사용자에게 스스로를 즐겁게 찾아 갈 수 있는 영감이 되길 희망합니다.',
        'txt_03':
        '페이크미가 생각하는 소비자는 브랜드의 환상을 소비하는 사람도 아니며, 트렌드에 맞게 변해야 하는 대상도 아닙니다. 온전하게 당신다움으로 충분히 아름답다는 것을 인정하는 사람들이길 바랍니다. 그들과 함께 "이것도 아름다울 수 있는가?"에 대한 합당한 동의를 얻어 가려합니다. 이같은 태도가 페이크미를 차별화시키며, 유지시키는 힘입니다.',
        'main_txt_01':
        '가림과 변화, 시선과 응시 의미를 제품과 디자인으로 표현합니다. 페이크미의 행동이 사용자에게 스스로를 즐겁게 찾아 갈 수 있는 영감이 되길 희망합니다.',
        'main_txt_02':
        '페이크미가 생각하는 소비자는 브랜드의 환상을 소비하는 사람, 변해야 하는 대상도 아닙니다. 온전하게 당신다움으로 충분히 아름답다는 것을 인정하는 사람들이길 바랍니다.',
    },

    en: {
        'subscribe button' : 'Sub',
        'company button' : 'Company',
        'member button' : 'Member',
        'title_01' : 
        'FAKEMe is an interesting brand that evokes the variety of beauty.',
        'title_02' :
        'Covering and Changing, Looking and Staring',
        'txt_01' :
        'We design and create products. The product should be beautiful, and the design should have good intentions (善意). The direct goodwill of design is not to promote the latest trends, I believe we are talking about a wide range of beauty. This is to help you expand the standards of beauty. Securing the legitimacy of the procedure for the beauty obtained in that way, To be able to have legitimacy. This is what Fake Me is doing.',
        'txt_02' :
        'Eyewear is the third element that exists between the subject and the other. So, eyewear is something that is shown to the other and the other who is looking at the subject It only functions in relation to the subject. By visualizing the characteristics of the relationship above It expresses the meaning of "cover and change" and "look and gaze" with products and designs. This Fake Me is behavior has been shown to the user  I hope it will be an inspiration to find myself happily.',
        'txt_03':
        'The consumer that Fake Me thinks is not someone who consumes the illusion of the brand, It is not even something that needs to change with the trend. I hope they acknowledge that you are beautiful enough to be intact. With them, I am going to get a reasonable agreement on "Can this be beautiful too?" This attitude is the power to differentiate and maintain fake beauty.',
        'main_txt_01':
        'It expresses the meaning of cover and change, gaze and gaze with products and designs. We hope that FAKEME is actions will inspire users to find themselves enjoyable.',
        'main_txt_02':
        'The consumer that Fake Me thinks is It is not someone who consumes the illusion of a brand, nor is it an object that needs to change. I hope they acknowledge that you are beautiful enough to be intact.',
    }
}
function useTranslate(){
    const locale = useLocale();
    const translate = (key)=>dict[locale][key] || '';
    return translate;
}
export default useTranslate;