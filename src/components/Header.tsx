import React from 'react';
import s from './Header.module.css'


export const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.header__logo}
                 src={'https://w7.pngwing.com/pngs/733/575/png-transparent-logo-x5-retail-group-business-brand-business-leaf-text-retail.png'}
                 alt={'logo'}/>
        </header>
    )
}