import React from 'react';
import cProf from './Post.module.css';

const Post = (props) => {
    return (
        <div className={cProf.item}>
            <img src='https://static.wixstatic.com/media/c74837_df238d6414ac49548568d4a596e3d28b~mv2.png/v1/fill/w_280,h_280,al_c,q_85,usm_0.66_1.00_0.01/Final%20Touch%20Logo%20Gold%20without%20BG%5BConvert.webp'/>
            <span>{props.msg}</span>
            <div>
                <span>likes: {props.likes}</span>
            </div>

        </div>
    )
}
export default Post;