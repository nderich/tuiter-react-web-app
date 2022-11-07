import React from "react";
// import postsArray from './posts.json';
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
// add more!!!

const TuitsList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <>
            <div>
                <ul className="list-group">
                    {
                        postsArray.map(tuit =>
                            <TuitItem
                                key={tuit._id}
                                tuits={tuit}/> )
                    }
                </ul>
            </div>
        </>
    );
};
export default TuitsList;

