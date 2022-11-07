import React from "react";
import TuitStats from "./tuit-stats"
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
        tuits = {}
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
            <li className="list-group-item">
                <div className="row">
                    <div className="float-start col-1">
                        <img className="rounded-circle" height="40px" src={tuits.image}/>
                    </div>
                    <div className="col-11">
                        <div className="">
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuits._id)}></i>
                            <span className="fw-bolder">{tuits.userName} <i className="fas fa-check-circle"></i></span>
                            <span className="text-muted"> {tuits.handle} - {tuits.time}</span>
                            <div>{tuits.tuit}</div>
                        </div>

                        <TuitStats
                            key={tuits._id}
                            tuits={tuits}
                        />

                    </div>
                </div>
            </li>
        );
};

export default TuitItem;

