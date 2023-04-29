import React from 'react';
import s from './MyPosts.module.css'
import {PostForm} from './PostForm/PostForm';
import {Post} from './Post/Post';
import {PostTitle} from './PostTitle/PostTitle';

export const MyPosts = () => {

    const message1 = 'Hi, how are you?';
    const message2 = "It's my first post";

    const likes1 = 15;
    const likes2 = 20;

    return (
        <div className={s.posts__block}>
            <PostTitle/>
            <PostForm/>
            <Post message={message1} likesCount={likes1}/>
            <Post message={message2} likesCount={likes2}/>
        </div>
    )
}