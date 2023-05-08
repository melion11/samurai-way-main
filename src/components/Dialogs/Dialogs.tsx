import React from 'react';
import s from './Dialogs.module.css'
import {DialogMessage} from './Message/Message';
import {DialogItem} from './Dialog/Dialog';
import {DialogsPageType} from '../../Redux/state';



export const Dialogs: React.FC<DialogsPageType> = ({
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

