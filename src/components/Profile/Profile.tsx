import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostPropsType} from './MyPosts/Post/Post';

export const Profile = () => {

    const postsData: PostPropsType[]  = [
        {id: 1,message:'Hi, how are you?', likesCount: 12},
        {id: 2,message:"It's my first post", likesCount: 20}
    ]


    return (
        <div className={s.profile__wrapper}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    )
}