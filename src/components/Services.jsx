import React from 'react';
import SwiperService from "../components/SwiperServices.jsx";
const Services = () => {
  return (
    <section id="services" className="
    services
    relative
    w-auto
    dt:w-auto
    dt:m-auto
    dt:h-[815px]
    h-[625px]">
      <img className="hidden md:hidden dt:z-50 dt:block dt:absolute dt:left-0 dt:right-0 dt:ml-auto dt:mr-auto dt:top-[-73px]" src="/src/assets/images/line_des_center.png" alt=""/>
      <img className="hidden dt:hidden md:block md:absolute md:top-[-100px] left-0 right-0 ml-auto mr-auto dt:w-[1440px]  dt:top-[-70px]" src="/src/assets/images/line2side_md.png" alt=""/>
      <div className="relative py-0 p-[30px] dt:pt-[20px] dt:px-[150px] items-center dt:flex flex-col bg-[url(/src/assets/images/2_mob_services.png)] md:bg-[url(/src/assets/images/2_md_serv.png)] dt:bg-[url(/src/assets/images/serv_des.png)] hd:bg-[url(/src/assets/images/serv.png)] h-[625px] dt:h-[815px] ">
        <div className="m-auto dt:ml-0 dt:mt-0 dt:text-left mb-[20px] text-center text-base w-[260px]"><h1 className="font-bold text-[32px]">Услуги:</h1>
        </div>
        <div className="m-auto mb-[40px] text-center text-base w-[260px] dt:w-auto dt:absolute dt:left-0 dt:right-0 dt:ml-auto dt:mr-auto dt:z-50"><span>Мы осуществляем перевод с китайского и на китайский язык</span>
        </div>
        <img className="dt:hidden md:hidden absolute top-[95px] left-0 right-0 ml-auto mr-auto" src="/src/assets/images/cen_320_n.png" alt=""/>
        <div className="mt-[10px] mb-[30px] md:mb-[30px] dt:hidden">
          <SwiperService client:load="true"/>
        </div>
        <ul className="relative hidden dt:mb-0 dt:flex dt:justify-center  hd:flex hd:justify-center  mt-[10px]  dt:flex dt:flex-wrap ">
          <li
              className="relative text-center mb-[32px] mr-[60px] dt:w-[340px] dt:h-[282px] p-[30px] bg-[url(/src/assets/images/back_swipe_services_des.png)]">
            <img className="mb-[20px] dt:mb-[40px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
            <span className="text-base dt:text-xl h-[48px]">Письменный перевод документации</span>
          </li>
          <li
              className="relative text-center mb-[32px] mr-[60px] dt:w-[340px] dt:h-[282px] p-[30px]  bg-[url(/src/assets/images/back_swipe_services_des.png)]">
            <img className="mb-[20px] dt:mb-[40px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
            <span
                className="text-base dt:text-xl w-[260px] h-[48px]">Лингвистическое сопровождение процессов поставки</span>
          </li>
          <li
              className="relative text-center hd:mr-[60px] dt:w-[340px] dt:h-[282px] p-[30px] bg-[url(/src/assets/images/back_swipe_services_des.png)]">
            <img className="mb-[20px] dt:mb-[40px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
            <span
                className="text-base dt:text-xl h-[48px]">Нотариальное заверение переводов</span>
          </li>
          <li
              className="relative text-center dt:w-[340px] mr-[60px] hd:mr-0 dt:h-[282px] p-[30px]  bg-[url(/src/assets/images/back_swipe_services_des.png)]">
            <img className="mb-[20px] dt:mb-[40px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
            <span
                className="text-base dt:text-xl h-[48px]">Работа с видео- и аудиоматериалами</span>
          </li>
          <li
              className="relative text-center dt:w-[340px] mr-[60px] dt:h-[282px] p-[30px] bg-[url(/src/assets/images/back_swipe_services_des.png)]">
            <img className="mb-[20px] dt:mb-[40px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
            <span
                className="text-base dt:text-xl h-[48px]">Перевод экспортной документации</span>
          </li>
          <li
              className="relative text-center dt:w-[340px] dt:h-[282px] p-[30px]  bg-[url(/src/assets/images/back_swipe_services_des.png)]">
            <img className="mb-[20px] dt:mb-[40px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
            <span
                className="text-base dt:text-xl h-[48px]">Устный перевод</span>
          </li>
        </ul>
        <img className=" md:hidden dt:hidden absolute bottom-[260px] left-0 right-0 ml-auto mr-auto" src={"/src/assets/images/right_320_n.png"} alt=""/>
        <div className="relative flex flex-col items-center">
          <img className="dt:hidden md:m-auto mb-[20px]" src="/src/assets/images/osobaya.png" alt=""/>
          <img className="hidden dt:block dt:mb-0 dt:w-[575px] dt:h-[94px] mb-[20px]" src="/src/assets/images/osobaya_dt.png" alt=""/>
          <span
            className="text-center text-3xl font-bold absolute top-[13px] md:right-[225px] dt:right-[0px] dt:top-[5px] w-[260px] h-[37px] dt:w-[575px] dt:h-[38px]">Особая услуга:</span>
          <span className="text-center font-normal absolute top-[53px] md:right-[225px] dt:right-[0px] dt:top-[45px] w-[257px] h-[88px] dt:w-[575px] dt:h-[43px]">Переговоры с китайской стороной в группах WeChat (разово или на постоянной основе)</span>
        </div>
        <img className=" md:hidden dt:hidden absolute bottom-[20px] left-0 right-0 ml-auto mr-auto" src="/src/assets/images/cen_320_n.png" alt=""/>
      </div>
    </section>
  )
}
export default Services;
