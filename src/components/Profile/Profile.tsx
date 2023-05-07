import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostPropsType} from './MyPosts/Post/Post';

export type ProfilePropsType = {
    postsData: PostPropsType[];
}

export const Profile: React.FC<ProfilePropsType> = ({
                                                        postsData
                                                    }) => {
    return (
        <div className={s.profile__wrapper}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    )
}