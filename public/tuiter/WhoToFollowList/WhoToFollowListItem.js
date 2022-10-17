
const WhoToFollowListItem = (who) => {

    return(`
        <li class="list-group-item wd-who-follow">
            <div class="row">
                <div class="float-start col-2">
                    <img class="rounded-circle" height="40px" src="${who.avatarIcon}">
                </div>
                <div class="col-6">
                    <div class="fw-bolder">${who.userName} <i class="fas fa-check-circle"></i></div>
                    <div class="text-muted small">@${who.userName}</div>
                </div>

                <div class="col-4">
                    <button type="button" class="btn btn-primary col-12 rounded-pill mt-1 wd-follow-button">Follow</button>
                </div>
            </div>
        </li>
    `);
}



export default WhoToFollowListItem;