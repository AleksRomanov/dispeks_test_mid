import SwiperWuGet from "./SwiperWuGet.jsx";
import React from "react";
const WuGet = () => {
  return (
<section id="wuget" className="
        wuget
        relative
        w-auto
        h-[400px]
        dt:h-[1080px]
        dt:w-auto
        dt:m-auto
        dt:pb-[0px]
        ">
  <img className="hidden md:hidden dt:block dt:w-[1440px] dt:absolute dt:left-0 dt:right-0 dt:ml-auto dt:mr-auto dt:z-50  dt:top-[-80px]" src="/src/assets/images/line_des_center.png" alt=""/>
  <img className="hidden dt:hidden md:block md:absolute left-0 right-0 ml-auto mr-auto md:top-[-55px] md:z-50" src="/src/assets/images/line2side_md.png" alt=""/>
  <div className="py-[15px] md:pt-0 dt:px-[69px] p-[30px] flex-col bg-[url(/src/assets/images/wuget_mob.png)] h-[400px] md:bg-[url(/src/assets/images/2_md_wuget.png)] dt:bg-[url(/src/assets/images/wuget_footer.png)] dt:h-[1080px]">
    <h1 className="font-bold text-[32px] md:m-auto  dt:ml-0 mb-[28px] md:mb-[50px] md:pt-[30px] dt:mb-[55px] dt:px-[69px] w-[300px] dt:w-[450px]">Что вы получите?</h1>
    <div className="mt-[10px] dt:hidden">
      <SwiperWuGet client:load />
    </div>
    <ul className="hidden mt-[10px]  dt:flex dt:flex-nowrap dt:flex dt:justify-center hd:flex hd:justify-center">
      <li className="relative text-center mb-[32px] dt:mr-[18px] dt:w-[312px] dt:h-[406px] p-[30px] bg-[url(/src/assets/images/back_swipe_wuget_des.png)]">
        <img className="mb-[20px] dt:mb-[40px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
        <p className="text-base dt:text-xl dt:mb-[20px] dt:h-[67px]">Квалифицированные переводчики</p>
        <span className="text-base dt:text-base dt:font-light ">Мы привлекаем к работе только квалифицированных переводчиков, редакторов и верстальщиков. Каждый перевод проходит редактуру и финальную вычитку.</span>
      </li>
      <li className="relative text-center mb-[32px] dt:mr-[18px] dt:w-[312px] dt:h-[406px] p-[30px] bg-[url(/src/assets/images/back_swipe_wuget_des.png)]">
        <img className="mb-[20px] dt:mb-[40px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
        <p className="text-base dt:text-xl dt:mb-[20px] dt:h-[67px]">Срочные заказы</p>
        <span className="text-base dt:text-base dt:font-light ">Беремся за срочные заказы с временем выполнения вплоть до 1 часа.</span>
      </li>
      <li className="relative text-center mb-[32px] dt:mr-[18px] dt:w-[312px] dt:h-[406px] p-[30px] bg-[url(/src/assets/images/back_swipe_wuget_des.png)]">
        <img className="mb-[20px] dt:mb-[40px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
        <p className="text-base dt:text-xl dt:mb-[20px] dt:h-[67px]">Оптимизация расходов клиента</p>
        <span className="text-base dt:text-base dt:font-light ">За счет использования CAT-систем, можем добиться оптимизации расходов клиента при наличии повторений, схожих предложений и прочее.</span>
      </li>
      <li className="relative text-center mb-[32px]  dt:w-[312px] dt:h-[406px] p-[30px] bg-[url(/src/assets/images/back_swipe_wuget_des.png)]">
        <img className="mb-[20px] dt:mb-[40px] m-auto w-[82px] h-[82px]" src="/src/assets/images/icon_swipe.png" alt=""/>
        <p className="text-base dt:text-xl dt:mb-[20px] dt:h-[67px]">Пакетные предложения</p>
        <span className="text-base dt:text-base dt:font-light ">Наличие пакетных предложений, которые оговариваются с каждым клиентом индивидуально.</span>
      </li>
    </ul>
  </div>
</section>
  )
}
export default WuGet;