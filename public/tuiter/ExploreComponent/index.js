import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                <!--<h3>Navigation Sidebar</h3>-->
                ${NavigationSidebar()}
            </div>
            <div class="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
                ${ExploreComponent()}
            </div>
            <div class="col-4 d-none d-lg-block">
                ${WhoToFollowList()}
            </div>
        </div>
   `);
}

$(exploreComponent);
