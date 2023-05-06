import React from 'react';
import {Background} from './Background/Background';
import {Avatar} from './Avatar/Avatar';
import {Description} from './Description/Description';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={s.profile__info}>
            <Background/>
            <Avatar/>
            <Description/>
        </div>
    )
}