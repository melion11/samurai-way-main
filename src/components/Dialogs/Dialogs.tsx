import React from 'react';
import s from './Dialogs.module.css'
import {DialogMessage, DialogMessageTypeProps} from './Message/Message';
import {DialogItem, DialogItemTypeProps} from './Dialog/Dialog';

export type DialogsPropsType = {
    dialogsData: DialogItemTypeProps[];
    messagesData: DialogMessageTypeProps[];
}

export const Dialogs = () => {

    const dialogsData: DialogItemTypeProps[] = [
        {id: 1, name: 'Pasha'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Sasha'}
    ]

    const messagesData: DialogMessageTypeProps[] = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are u?'},
        {id: 3, message: 'Fine, thx'},
    ]

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

