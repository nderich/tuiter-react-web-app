import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="border border-top-0 border-secondary">
            <!--Search-->
                <div class="row mt-2">
                    <div class="col-11">
                        <div class="position-relative ms-3 mb-2">
                            <input class="ps-5 form-control rounded-pill wd-nav-bar" placeholder="Search Tuiter">
                            <span class="position-absolute wd-search-icon-tuiter">
                            <i class="fas fa-search"></i>
                        </span>
                        </div>
                    </div>
                    <div class="col-1 mt-2  ps-1">
                        <i class="fas fa-cog"></i>
                    </div>
                </div>
                <!--Tabs-->
                <div class="wd-middle">
                    <ul class="nav nav-tabs border-secondary">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sports</a>
                        </li>
                        <li class="nav-item d-none d-md-inline-block">
                            <a class="nav-link" href="#">Entertainment</a>
                        </li>
                    </ul>
                </div>
            </div>
           <!-- image with overlaid text -->
           <div class="position-relative wd-middle border border-secondary border-top-0">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2020%2F05%2FGettyImages-1177999678-2500x1666-1-2060x1373.jpg&f=1&nofb=1&ipt=08da7927345c7514a3ef3e7961d4400e866199c05634de134c7db6dae54695c8&ipo=images"
                     width="100%">
                <h1 class="position-absolute bottom-0 left-0 text-white">
                    SpaceX's Starship
                </h1>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
