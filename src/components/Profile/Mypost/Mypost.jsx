import React from 'react';
import cProf from './Mypost.module.css';
import Post from "./Post/Post";

const Mypost = () => {
    let postsData =[
        {   ids: 1,   msg: 'test 1', likes: 12  },
        {   ids: 2,   msg: 'Test 2', likes: 10 },
        {   ids:3,    msg: 'Test 3', likes: 11 },
        {   ids:3,    msg: 'Test 4', likes: 8 },
        {   ids:3,    msg: 'Test 5', likes: 24 }
    ];
    let postItem = postsData.map( p => <Post ids={p.ids} msg={p.msg} likes={p.likes} /> );

    return (
            <div className={cProf.block_post}>
                <h4>My Posts</h4>
                <div className={cProf.form_submit}>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <h4>Last Posts</h4>
                <div className="posts">
                    {postItem}
                </div>
            </div>
    )
};
export default Mypost;