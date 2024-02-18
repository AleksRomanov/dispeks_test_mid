import Burger from "./Burger.jsx";
import React from "react";

const Header = () => {
    return (
        <section id="header"
                 className="
                 header
                 sticky
                 dt:relative
                 top-0
                 z-50
                 relative
                 bg-[url(/src/assets/images/2_mob_2.png)]
                 md:bg-[url(/src/assets/images/2_md_head.png)]
                 dt:bg-[url(/src/assets/images/2_desk_815.png)]
                 w-auto
                 dt:w-auto
                 dt:m-auto
                 h-[100px]
                 flex
                 justify-between
                 items-center
                 py-[14px]
                 p-[30px]
                 dt:px-[150px]
                ">
            <span className="flex flex-col justify-center items-center dt:order-2">RU | CH</span>
            <img className="w-[80px] h-[72px]" src="/src/assets/images/asia_speak_logo.png" alt=""/>
            <div className="dt:hidden">
                <Burger client:load/>
            </div>
            <ul className="hidden dt:block dt:m-0 dt:w-[800px] dt:flex dt:align-items dt:justify-between text-white">
                <li><a href="#teaser">Главная</a></li>
                <li><a href="#services">Услуги</a></li>
                <li><a href="#typetranslation">Виды перевода</a></li>
                <li><a href="#wuget">Что вы получите</a></li>
                <li><a href="#footer">Контакты</a></li>
            </ul>
        </section>
    )
}
export default Header;
