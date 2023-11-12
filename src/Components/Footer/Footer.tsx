import {FooterStyled} from './Footer.styles.tw'
import {Link} from "react-router-dom";
// import React, {ReactComponentElement} from 'react'
// import { Button } from 'antd'
// import Router from 'next/router'
// import FooterNav from './FooterNav/FooterNav'
// import {ReactComponent as Logo} from '../../svg/mk2.svg'
// import {ReactComponent as Instagram} from '../../svg/instagram.svg'
// import {ReactComponent as Vk} from '../../svg/vk.svg'


export default function Footer(): JSX.Element {
    // const linkClickHandler = () => {
    //   Router.push('/')
    // }
    return (
        <FooterStyled>

            <div className={'footer-navigation'}>
                <ul className="footer-navigation-list">
                    <li className="footer-navigation-list__item"><Link to="/street1" className="">Улица №1</Link>
                    </li>
                    <li className="footer-navigation-list__item"><Link to="/street2" className="">Улица №2</Link>
                    </li>
                    <li className="footer-navigation-list__item"><Link to="/street3" className="">Улица №3</Link>
                    </li>
                </ul>
            </div>

            <div className="footer-rights">
                <h1>FOOTER</h1>
                <p>© 2023. Все права защищены</p>
            </div>
        </FooterStyled>
    )
}
