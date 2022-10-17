

const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item bg-black wd-content-section">
                    <div class="row">
                        <div class="col-9">
                            <div class="text-muted">${post.topic}</div>
                            <div><b>${post.userName} <i class="fas fa-check-circle"></i></b><span class="text-muted"> - ${post.time}</span> </div>
                            <div><b>${post.title}</b></div>
                        </div>
                        <div class="col-3">
                            <img class="float-end rounded" height="100px" src=${post.image}>
                        </div>
                    </div>
                </li>
    `);
}

export default PostSummaryItem;