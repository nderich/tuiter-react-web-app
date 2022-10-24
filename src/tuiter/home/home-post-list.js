import React from "react"
import postArray from './post.json';
import HomePostItem from './home-post-item';

const HomePostList = () => {
    return(
        <ul className="list-group">
            {
                postArray.map(post =>
                    <HomePostItem post={post}/> )
            }
        </ul>
    );
};

export default HomePostList;