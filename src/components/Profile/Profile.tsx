import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../Redux/state';




export const Profile: React.FC<ProfilePageType> = ({
                                                        postsData
                                                    }) => {
    return (
        <div className={s.profile__wrapper}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    )
}