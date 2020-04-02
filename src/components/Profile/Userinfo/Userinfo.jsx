import React from 'react';
import cProf from './Userinfo.module.css';


const Userinfo = () => {
    return (
        <div>
            <div className={cProf.banner}>

            </div>
            <div className={cProf.info_user}>
                user information
                <div className={cProf.photo}>
                    <img src="https://cdn.clipart.email/01fda33a9617df6983c0d141bcc36441_liverpool-fc-everton-fc-premier-league-football-brighton-_800-800.jpeg" />
                </div>
            </div>

        </div>


    )
}
export default Userinfo;