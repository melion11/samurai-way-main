import React from 'react';
import s from './Post.module.css'


export type PostPropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return (
            <div className={s.post__wrap}>
                <img className={s.post__image} src="" alt=""/>
                <p className={s.post__text}>{props.message}</p>
                <p><span>Likes: {props.likesCount}</span></p>
            </div>
    )
}