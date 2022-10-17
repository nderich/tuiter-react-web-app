

const PostItem = (post) => {

    if (post.link === "") {
        return(`
        <li class="list-group-item bg-black border-start-0 border-end-0 border-top-0 border-secondary ">
            <div class="row">
                <div class="float-start col-1">
                    <img class="rounded-circle" height="40px" src="${post.avatarIcon}">
                </div>
                <div class="col-11">
                    <div class="">
                        <span class="fw-bolder">${post.userName} <i class="fas fa-check-circle"></i></span>
                        <span class="text-muted"> ${post.handle} - ${post.time}</span>
                        <div>${post.text}</div>
                    </div>
                    <div class="mt-2">
                        <img class="border border-secondary rounded img-fluid" src="${post.postImg}">
                    </div>
                    
                    <div class="row text-muted mt-2">
                        <span class="col-3"><i class="far fa-comment"></i> ${post.comments}</span>
                        <span class="col-3"><i class="fas fa-retweet"></i> ${post.retuits}</span>
                        <span class="col-3"><i class="far fa-heart"></i> ${post.likes}</span>
                        <span class="col-3"><i class="far fa-share-square"></i></span>
                    </div>
                    
                </div>
            </div>
        </li>
    `);
    } else {
        return(`
        <li class="list-group-item bg-black border-start-0 border-end-0 border-top-0 border-secondary ">
            <div class="row">
                <div class="float-start col-1">
                    <img class="rounded-circle" height="40px" src="${post.avatarIcon}">
                </div>
                <div class="col-11">
                    <div>
                        <div class="">
                            <span class="fw-bolder">${post.userName} <i class="fas fa-check-circle"></i></span>
                            <span class="text-muted"> ${post.handle} - ${post.time}</span>
                            <div>${post.text}</div>
                        </div>
                        <div class="border border-secondary rounded-top rounded-bottom mt-2">
                            <div class="">
                                <img class="rounded-top img-fluid" src="${post.postImg}">
                            </div>
                            <div class="mt-2 border border-secondary border-bottom-0 border-start-0 border-end-0 p-2">
                                <div>${post.title}</div>
                                <div class="text-muted">${post.subtitle}</div>
                                <div class="text-muted"><i class="fas fa-link"></i> ${post.link}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row text-muted mt-2">
                        <span class="col-3"><i class="far fa-comment"></i> ${post.comments}</span>
                        <span class="col-3"><i class="fas fa-retweet"></i> ${post.retuits}</span>
                        <span class="col-3"><i class="far fa-heart"></i> ${post.likes}</span>
                        <span class="col-3"><i class="far fa-share-square"></i></span>
                    </div>
                    
                </div>
            </div>
        </li>
    `);
    }


}

export default PostItem;