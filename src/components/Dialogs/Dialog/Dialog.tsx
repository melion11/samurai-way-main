import React from 'react';
import s from '../../Navbar/Navbar.module.css';
import {NavLink} from 'react-router-dom';

export type DialogItemTypeProps = {
    name: string;
    id: number;
}

export const DialogItem: React.FC<DialogItemTypeProps> = (
    {
     name,
     id
    }) => {



    return (
        <div>
            <li key={id} className={`${s.dialog__item} ${s.active}`}>
                <NavLink to={`/dialogs/${id}`}>{name}</NavLink></li>
        </div>
    );
};

