import React from "react";
// import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-item";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <>
            <div>
                <ul className="list-group">
                    {
                        postsArray.map(post =>
                            <PostSummaryItem
                                key={post._id} post={post}/> )
                    }
                </ul>
            </div>
        </>
    );
};
export default PostSummaryList;

