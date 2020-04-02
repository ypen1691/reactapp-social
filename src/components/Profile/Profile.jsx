import React from 'react';
import cProf from './Profile.module.css';

const Profile = () => {
    return (
        <div className={cProf.content}>
            <div>
                <img src="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg" />
            </div>
            <div class={cProf.photo}>
                <img src="https://lh3.googleusercontent.com/proxy/QvhEpvOh16_yQyeapKXqXnvZYJ0SlvsPlr-VaFYHqUKFPuD-sdmiOJxCZcugqehUac-WfGZq4T_HO6XkqkcDuNybv7UKJgafqWKOlGA" />
            </div>
            <div>
                My Posts
                <div>
                     new post
                </div>
                <div className="posts">
                    <div className={cProf.item}>Post 1</div>
                    <div className={cProf.item}>Post 2</div>
                </div>
            </div>
        </div>
    )
}
export default Profile;