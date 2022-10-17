import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/PostList.js"
import PostSummaryList from "../PostSummaryList/index.js";

function homeComponent() {
    $('#wd-home').append(`
        <div class="row">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                <!--<h3>Navigation Sidebar</h3>-->
                ${NavigationSidebar()}
            </div>
            <div class="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
                ${PostList()}
            </div>
            <div class="col-4 d-none d-lg-block">
                ${PostSummaryList()}
            </div>
        </div>
   `);
}

$(homeComponent);
