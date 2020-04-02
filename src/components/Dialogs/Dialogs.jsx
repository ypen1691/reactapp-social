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
    return (
        <div>
            <h1>Dialogs</h1>
            <div className={ds.dialogs}>
                <div className={ds.dialogs_items}>
                    <DialogItem name='John' ids='1'/>
                    <DialogItem name='Alex' ids='2'/>
                    <DialogItem name='Sofia' ids='3'/>
                </div>
                <div className={ds.messages}>
                    <Message title_m='hey'/>
                    <Message title_m='hi'/>
                    <Message title_m='hello'/>

                </div>
            </div>
        </div>
    )
}

export default Dialogs;