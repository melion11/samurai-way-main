import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {Background} from './Background/Background';
import {Avatar} from './Avatar/Avatar';
import {Description} from './Description/Description';

export const Profile = () => {
    return (
        <div className={s.content}>
            <Background/>
            <Avatar/>
            <Description/>
            <MyPosts/>
        </div>
    )
}