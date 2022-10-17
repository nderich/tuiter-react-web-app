import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js";

const PostSummaryList = () => {
    return(`  
        <ul class="list-group wd-middle border border-secondary border-top-0">
            ${post.map(post => PostSummaryItem(post)).join('')}
        </ul>
    `);
}

export default PostSummaryList;