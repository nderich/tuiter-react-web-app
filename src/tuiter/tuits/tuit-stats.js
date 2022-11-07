import React from "react";

const TuitStats = (
    {
        tuits = {}

    }
) => {
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
                     <i className="bi bi-heart"></i> {tuits.likes}
                    </span>
                }
                {
                    tuits.liked &&
                    <span className="col-3">
                     <i className="bi bi-heart-fill text-danger"></i> {tuits.likes}
                    </span>
                }



            <span className="col-3">
                <i className="bi bi-box-arrow-up"></i>
            </span>
        </div>

    );
};

export default TuitStats;