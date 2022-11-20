import React, {useEffect} from "react";
// import postsArray from './posts.json';
import TuitItem from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
        <>
            <div>
                <ul className="list-group">
                    {
                        loading &&
                        <li className="list-group-item">
                            Loading...
                        </li>
                    }
                    {
                        tuits.map(tuit =>
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


//const TuitsList = () => {
//     const postsArray = useSelector(state => state.tuits)
//     return(
//         <>
//             <div>
//                 <ul className="list-group">
//                     {
//                         postsArray.map(tuit =>
//                             <TuitItem
//                                 key={tuit._id}
//                                 tuits={tuit}/> )
//                     }
//                 </ul>
//             </div>
//         </>
//     );
// };
// export default TuitsList;