import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.content__image}
                    src={'https://gamerwall.pro/uploads/posts/2022-08/1661206848_1-gamerwall-pro-p-peizazh-leto-oboi-1.jpg'}
                    alt={'image sea'}/>
            </div>

            <div>
                ava + desc
            </div>

            <div>
                My posts
                <div>New post</div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    )
}