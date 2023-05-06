import React from 'react';
import s from './MyPosts.module.css'
import {PostForm} from './PostForm/PostForm';
import {Post, PostPropsType} from './Post/Post';
import {PostTitle} from './PostTitle/PostTitle';

export type MyPostsPropsType = {
    postsData: PostPropsType[]
}


export const MyPosts: React.FC<MyPostsPropsType> = ({
    postsData
                                                    }) => {

    const post = postsData.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>);


    return (
        <div className={s.posts__block}>
            <PostTitle/>
            <PostForm/>
            <ul className={s.posts__list}>
                {post}
            </ul>

        </div>
    )
}