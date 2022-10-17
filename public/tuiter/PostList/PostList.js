import PostItem from "./PostItem.js";
import post from "./post.js";

const PostList = () => {
    return(`  
        <ul class="list-group wd-middle border border-secondary border-top-0 border-bottom-0">
            ${post.map(post => PostItem(post)).join('')}
        </ul>
    `);
}

export default PostList;