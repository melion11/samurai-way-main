import React from 'react';
import s from './Post.module.css'
import {PostType} from '../../../../Redux/state';




export const Post: React.FC<PostType> = ({
                                                  id,
                                                  message,
                                                  likesCount
                                              }) => {
    return (
        <li key={id} className={s.post__wrap}>
            <img className={s.post__image} src="" alt=""/>
            <p className={s.post__text}>{message}</p>
            <p><span>Likes: {likesCount}</span></p>
        </li>
    )
}