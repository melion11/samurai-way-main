import React from 'react';
import s from './PostForm.module.css'

export const PostForm = () => {
    return (
        <div className={s.post__form}>
            <textarea className={s.post__text} name="" id=""></textarea>
            <button className={s.post__button}>Send</button>
        </div>
    )
}