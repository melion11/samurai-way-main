import React from 'react';
import s from './Post.module.css'


// export type PostPropsType = {
//     id: number;
//     message: string;
//     likesCount: number;
// }

export const Post: React.FC<PostPropsType> = ({
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