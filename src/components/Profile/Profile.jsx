import React from 'react';
import cProf from './Profile.module.css';
import Mypost from "./Mypost/Mypost";
import Userinfo from "./Userinfo/Userinfo";

const Profile = () => {
    return (
        <div>
            <Userinfo/>
            <Mypost/>
        </div>
    )
}
export default Profile;