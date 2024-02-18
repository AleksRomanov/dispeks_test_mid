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
                },
            }}
        >
            <SwiperSlide className="swiper-slide">
                <div
                    className="relative text-center p-[30px] h-[209px] md:bg-[url(/src/assets/images/back_swipe_services_md.png)] bg-[url(/src/assets/images/back_swipe_services.png)]">
                    <img className="mb-[20px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
                    <span className="text-base h-[48px]">Письменный перевод документации</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div
                    className="relative text-center p-[30px] px-0 h-[209px] md:bg-[url(/src/assets/images/back_swipe_services_md.png)] bg-[url(/src/assets/images/back_swipe_services.png)]">
                    <img className="mb-[20px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
                    <span
                        className="text-base w-[260px] h-[48px]">Лингвистическое сопровождение процессов поставки</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div
                    className="relative text-center p-[30px] h-[209px] md:bg-[url(/src/assets/images/back_swipe_services_md.png)] bg-[url(/src/assets/images/back_swipe_services.png)]">
                    <img className="mb-[20px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
                    <span
                        className="text-base h-[48px]">Работа с видео- и аудиоматериалами</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div
                    className="relative text-center p-[30px] h-[209px] md:bg-[url(/src/assets/images/back_swipe_services_md.png)] bg-[url(/src/assets/images/back_swipe_services.png)]">
                    <img className="mb-[20px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
                    <span
                        className="text-base h-[48px]">Нотариальное заверение переводов</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div
                    className="relative text-center p-[30px] h-[209px] md:bg-[url(/src/assets/images/back_swipe_services_md.png)] bg-[url(/src/assets/images/back_swipe_services.png)]">
                    <img className="mb-[20px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
                    <span
                        className="text-base h-[48px]">Перевод экспортной документации</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div
                    className="relative text-center p-[30px] h-[209px] md:bg-[url(/src/assets/images/back_swipe_services_md.png)] bg-[url(/src/assets/images/back_swipe_services.png)]">
                    <img className="mb-[20px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
                    <span
                        className="text-base h-[48px]">Устный перевод</span>
                </div>
            </SwiperSlide>
        </SwiperComponent>
    );
};
