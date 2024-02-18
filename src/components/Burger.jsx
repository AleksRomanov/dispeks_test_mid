import React, {useState} from 'react';
import '../output.css';
import {Button, Drawer} from 'antd';

const Burger = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showDrawer}>Меню</Button>
            <Drawer
                className="drawer bg-[url(/src/assets/images/2_mob_services.png)]"
                closable={false}
                width={250}
                style={{backgroundColor: 'black'}}
                title="Asia Speak"
                onClose={onClose}
                open={open}
            >
                <ul className="text-white">
                    <li><a href="#teaser">Главная</a></li>
                    <li><a href="#services">Услуги</a></li>
                    <li><a href="#typetranslation">Виды перевода</a></li>
                    <li><a href="#wuget">Что вы получите</a></li>
                    <li><a href="#footer">Контакты</a></li>
                </ul>
            </Drawer>
        </>
    );
};

export default Burger;