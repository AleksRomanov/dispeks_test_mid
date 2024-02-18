const Footer = () => {
    return (
        <section id="footer" className="
        footer
        relative
        bg-[url(/src/assets/images/footer_mob.png)]
        dt:bg-[url()]
        flex
        flex-col
        md:h-[350px]
        dt:flex-row
        dt:justify-between
        py-0
        items-center
        p-[30px]
        dt:p-0
        w-auto
        dt:w-auto
        h-[400px]
        md:h-[290px]
        dt:h-[161px]
        dt:px-[150px]
        dt:m-auto
        dt:mt-[-161px]
        dt:bg-[#272628]
        dt:opacity-90
        ">
            <img className="dt:hidden w-[80px] h-[72px] mb-[10px]" src="/src/assets/images/asia_speak_logo.png" alt=""/>
            <img className="hidden dt:block w-[147px] h-[131px] mb-[10px]" src="/src/assets/images/logo_des.png" alt=""/>
            <div className="footer-contacts flex flex-col mb-[10px] py-0 items-center">
                <span className="mb-[10px]">info@asia-speak.ru</span>
                <span className="mb-[10px]">+79999999</span>
            </div>
            <ul className="footer-rights flex flex-col dt:flex-row items-center bg-[#272628] opacity-70 rounded-2xl md:rounded-none md:w-[768px] md:h-[320px] dt:mb-0 dt:rounded-none w-[220px] dt:w-auto h-[170px] dt:h-[42px] p-[20px] dt:p-[10px]">
                <li className="text-center mb-[10px] dt:w-[210px]">Copyright © 2024<br/>Все права защищены</li>
                <li className="text-center mb-[10px] dt:w-[220px]">Политика конфиденциальности</li>
                <li className="text-center mb-[10px]">Согласие на обработку персональных данных</li>
            </ul>
        </section>
    )
}
export default Footer;
