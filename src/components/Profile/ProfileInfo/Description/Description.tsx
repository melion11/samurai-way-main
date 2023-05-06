import React from 'react';
import s from './Description.module.css'

export const Description = () => {
    return (
        <div className={s.description__wrap}>
                <h2 className={s.description__title}>Iliya Grinyak</h2>
                <ul className={s.description__list}>
                    <li className={s.description__item}><span>Date of Birth</span></li>
                    <li className={s.description__item}><span>City: Minsk</span></li>
                    <li className={s.description__item}><span>Education: BSU'20</span></li>
                    <li className={s.description__item}><span>Web Site: https://it-incubator.com</span></li>
                </ul>
            </div>
    )
}