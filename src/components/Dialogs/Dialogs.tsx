import React from 'react';
import s from './Dialogs.module.css'
import {DialogMessage, DialogMessageTypeProps} from './Message/Message';
import {DialogItem, DialogItemTypeProps} from './Dialog/Dialog';

export type DialogsPropsType = {
    dialogsData: DialogItemTypeProps[];
    messagesData: DialogMessageTypeProps[];
}

export const Dialogs: React.FC<DialogsPropsType> = ({
                                                        dialogsData,
                                                        messagesData
                                                    }) => {


    const dialogItem = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    const dialogMessage = messagesData.map(message => <DialogMessage message={message.message} id={message.id}/>);


    return (
        <div className={s.dialogs__wrapper}>

            <ul className={s.dialogs__list}>
                {dialogItem}
            </ul>

            <div className={s.dialogs__messages}>
                {dialogMessage}
            </div>
        </div>
    );
};

