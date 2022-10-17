import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group mt-3 rounded-3">
                <li class="list-group-item fw-bolder wd-who-follow">Who to follow</li>
                <!-- continue here -->
                ${who.map(element => WhoToFollowListItem(element)).join('')}
            </ul>
`); }



export default WhoToFollowList;