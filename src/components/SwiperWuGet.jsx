import 'swiper/css';
import {Swiper as SwiperComponent} from 'swiper/react';
import {SwiperSlide} from "swiper/react";


export default () => {
    return (
        <SwiperComponent
            spaceBetween={20}
            autoHeight={true}
            loop={true}
            breakpoints={{
                320: {
                    spaceBetween: 20,
                    slidesPerView: 1,
                },
                768: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                    height: 274,
                },
            }}
        >
            <SwiperSlide className="swiper-slide">
                <div className="relative md:rounded-[15px] text-center p-[30px] md:bg-[url(/src/assets/images/back_swipe_wuget_md.png)] bg-[url(/src/assets/images/back_swipe_wuget.png)]">
                    <img className="mb-[20px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
                        <div className="flex flex-wrap md:flex md:flex-col md:items-center">
                            <span className="text-center text-basew-[260px] h-[48px]">Квалифицированные переводчики</span>
                            <span className="text-center text-xs w-[260px] font-light">Мы привлекаем к работе только квалифицированных переводчиков, редакторов и верстальщиков. Каждый перевод проходит редактуру и финальную вычитку</span>
                        </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="relative text-center p-[30px] md:bg-[url(/src/assets/images/back_swipe_wuget_md.png)] bg-[url(/src/assets/images/back_swipe_wuget.png)]">
                    <img className="mb-[20px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
                        <div className="flex flex-wrap md:flex md:flex-col md:items-center">
                            <span className="text-center text-base w-[260px] h-[48px]">Срочные заказы</span>
                            <span className="text-center text-xs w-[260px] font-light">Беремся за срочные заказы с временем выполнения вплоть до 1 часа</span>
                        </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="relative text-center p-[30px] md:bg-[url(/src/assets/images/back_swipe_wuget_md.png)]  bg-[url(/src/assets/images/back_swipe_wuget.png)]">
                    <img className="mb-[20px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
                        <div className="flex flex-wrap md:flex md:flex-col md:items-center">
                            <span className="text-center text-base  w-[260px] h-[48px]">Оптимизация расходов клиента</span>
                            <span className="text-center text-xs w-[260px] font-light">За счет использования CAT-систем, можем добиться оптимизации расходов клиента при наличии повторений, схожих предложений и прочее</span>
                        </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="relative text-center p-[30px] md:bg-[url(/src/assets/images/back_swipe_wuget_md.png)] bg-[url(/src/assets/images/back_swipe_wuget.png)]">
                    <img className="mb-[20px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
                        <div className="flex flex-wrap md:flex md:flex-col md:items-center">
                            <span className="text-center text-base w-[260px] h-[48px]">Пакетные предложения</span>
                            <span className="text-center text-xs w-[260px] font-light">Наличие пакетных предложений, которые оговариваются с каждым клиентом индивидуально</span>
                        </div>
                </div>
            </SwiperSlide>
        </SwiperComponent>
    );
};
