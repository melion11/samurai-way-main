import React from 'react';
import s from '../Dialogs.module.css';

// export type DialogMessageTypeProps = {
//     message: string;
//     id:number
// }

export const DialogMessage: React.FC<DialogMessageTypeProps> = (
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

