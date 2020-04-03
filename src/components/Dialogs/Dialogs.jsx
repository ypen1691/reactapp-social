import React from 'react';
import ds from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.ids;
    return(
        <div className={ds.item + ' ' + ds.active}>
            <NavLink to={path} activeClassName={ds.active}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return(
        <div className={ds.message}>{props.title_m}</div>
    )
};

const  Dialogs = (props) => {
    let dialogsData =[
        {   ids: 1,   name: 'John'  },
        {   ids: 2,   name: 'Alex' },
        {   ids:3,    name: 'Sofia' },
        {   ids:3,    name: 'Said' },
        {   ids:3,    name: 'Hugo' }
    ];
    let messagesData =[
        {   ids: 1,   msg: 'Hey'  },
        {   ids: 2,   msg: 'Hi' },
        {   ids:3,    msg: 'Hello' },
        {   ids:4,    msg: 'Hello' },
        {   ids:5,    msg: 'Hello123' }
    ];
    let dialog_mas = dialogsData.map( dialog => <DialogItem name={dialog.name} ids={dialog.ids} />);
    let message_mas = messagesData.map( msg => <Message title_m={msg.msg} ids={msg.ids} /> );


    return (
        <div>
            <h1>Dialogs</h1>
            <div className={ds.dialogs}>
                <div className={ds.dialogs_items}>
                    {dialog_mas}
                </div>
                <div className={ds.messages}>
                    {message_mas}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;