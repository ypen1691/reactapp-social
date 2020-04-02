import React from 'react';
import cProf from './Mypost.module.css';
import Post from "./Post/Post";

const Mypost = () => {
    return (
            <div className={cProf.block_post}>
                <h4>My Posts</h4>
                <div className={cProf.form_submit}>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <h4>Last Posts</h4>
                <div className="posts">
                    <Post msg='Hey,hi, hello' likes="34"/>
                    <Post msg='test post second hello' likes="234"/>
                    <Post msg='test 3' likes="342"/>
                    <Post msg='test 4' likes="354"/>
                    <Post msg='test 5' likes="934"/>
                </div>
            </div>
    )
};
export default Mypost;