import React from 'react';
import s from './Avatar.module.css'

export const Avatar = () => {
    return (
        <div className={s.avatar__wrap}>
            <img className={s.avatar__image} src="src/components/Profile/Profile" alt=""/>
        </div>
    )
}