import React from 'react';
import s from '../Dialogs.module.css';
import {DialogMessageType} from '../../../Redux/state';



export const DialogMessage: React.FC<DialogMessageType> = (
    {
        message,
        id
    }) => {
    return (

        <div className={s.dialog__message}>
            <p key={id}>{message}</p>
        </div>

    );
};

