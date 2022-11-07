import React from "react";

const PostSummaryItem = (
    {
        post = {}
    }
) => {
    if (post.link === "") {
        return(
            <li className="list-group-item">
                <div className="row">
                    <div className="float-start col-1">
                        <img className="rounded-circle" height="40px" src={post.avatarIcon}/>
                    </div>
                    <div className="col-11">
                        <div className="">
                            <span className="fw-bolder">{post.userName} <i className="fas fa-check-circle"></i></span>
                            <span className="text-muted"> {post.handle} - {post.time}</span>
                            <div>{post.text}</div>
                        </div>
                        <div className="mt-2">
                            <img className="rounded img-fluid" src={post.postImg}/>
                        </div>

                        <div className="row text-muted mt-2">
                            <span className="col-3"><i className="bi bi-chat"></i> {post.comments}</span>
                            <span className="col-3"><i className="bi bi-share"></i> {post.retuits}</span>
                            <span className="col-3"><i className="bi bi-heart"></i> {post.likes}</span>
                            <span className="col-3"><i className="bi bi-box-arrow-up"></i></span>
                        </div>

                    </div>
                </div>
            </li>
        );
    } else {
        return(
            <li className="list-group-item">
                <div className="row">
                    <div className="float-start col-1">
                        <img className="rounded-circle" height="40px" src={post.avatarIcon}/>
                    </div>
                    <div className="col-11">
                        <div className="">
                            <span className="fw-bolder">{post.userName} <i className="fas fa-check-circle"></i></span>
                            <span className="text-muted"> {post.handle} - {post.time}</span>
                            <div>{post.text}</div>
                        </div>
                        <div className="mt-2 card">
                            <img className="rounded img-fluid" src={post.postImg}/>
                            <div className="card-body">
                                <h6 className="card-title">{post.title}</h6>
                                <div className="card-text text-muted">{post.subtitle}</div>
                                <div className="card-text text-muted"><i className="bi bi-link-45deg"></i> npm {post.link}</div>
                            </div>
                        </div>

                        <div className="row text-muted mt-2">
                            <span className="col-3"><i className="bi bi-chat"></i> {post.comments}</span>
                            <span className="col-3"><i className="bi bi-share"></i> {post.retuits}</span>
                            <span className="col-3"><i className="bi bi-heart"></i> {post.likes} </span>
                            <span className="col-3"><i className="bi bi-box-arrow-up"></i></span>
                        </div>

                    </div>
                </div>
            </li>
        );
    }

};
export default PostSummaryItem;

