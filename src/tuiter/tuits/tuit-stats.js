import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
        tuits = {}

    }
) => {
    const dispatch = useDispatch();

    return(

        <div className="row text-muted mt-2">

            <span className="col-3">
                <i className="bi bi-chat"></i> {tuits.replies}
            </span>

            <span className="col-3">
                <i className="bi bi-share"></i> {tuits.retuits}
            </span>

                {
                    !tuits.liked &&
                    <span className="col-3">
                    <i onClick={() => dispatch(updateTuitThunk({
                    ...tuits,
                    likes: tuits.likes + 1
                }))} className="bi bi-heart"></i> {tuits.likes}
                    </span>
                }
                {
                    tuits.liked &&
                    <span className="col-3">
                     <i onClick={() => dispatch(updateTuitThunk({
                         ...tuits,
                         likes: tuits.likes + 1
                     }))} className="bi bi-heart-fill me-2 text-danger"></i> {tuits.likes}
                    </span>
                }



            <span className="col-3">
                <i className="bi bi-box-arrow-up"></i>
            </span>
        </div>

    );
};

export default TuitStats;