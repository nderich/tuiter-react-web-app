const NavigationSidebar = (active) => {

    // fw-bold

    return(`
            <ul class="list-group mt-2">
                <li class="list-group-item wd-side-bar"><i class="fab fa-twitter"></i></li>
                
                <li class="home list-group-item wd-side-bar">
                    <a href="../HomeScreen/index.html">
                        <i class="fas fa-home d-xl-none"></i>
                        <span class="d-none d-xl-block row">
                            <i class="fas fa-home col-1"></i>
                            <span class="col-10">Home</span>
                        </span>
                    </a>
                </li>

                <li class="explore list-group-item  wd-side-bar">
                    <a href="../ExploreComponent/index.html">
                        <i class="fas fa-hashtag d-xl-none"></i>
                        <span class="d-none d-xl-block row">
                            <i class="fas fa-hashtag col-1"></i>
                            <span class="col-10">Explore</span>
                        </span>
                    </a>
                </li>

                <li class="list-group-item wd-side-bar">
                    <a href="#">
                        <i class="fas fa-bell d-xl-none"></i>
                        <span class="d-none d-xl-block row">
                            <i class="fas fa-bell col-1"></i>
                            <span class="col-10">Notifications</span>
                        </span>
                    </a>
                </li>
<!--                <li class="list-group-item"><i class="fas fa-bell"></i> Notifications</li>-->
                <li class="list-group-item wd-side-bar">
                    <a href="#">
                        <i class="fas fa-envelope d-xl-none"></i>
                        <span class="d-none d-xl-block row">
                            <i class="fas fa-envelope col-1"></i>
                            <span class="col-10">Messages</span>
                        </span>
                    </a>
                </li>
<!--                <li class="list-group-item"><i class="fas fa-envelope"></i> Messages</li>-->
                <li class="list-group-item wd-side-bar">
                    <a href="#">
                        <i class="fas fa-bookmark d-xl-none"></i>
                        <span class="d-none d-xl-block row">
                            <i class="fas fa-bookmark col-1"></i>
                            <span class="col-10">Bookmarks</span>
                        </span>
                    </a>
                </li>
<!--                <li class="list-group-item"><i class="fas fa-bookmark"></i> Bookmarks</li>-->
                <li class="list-group-item wd-side-bar">
                    <a href="#">
                        <i class="fas fa-list d-xl-none"></i>
                        <span class="d-none d-xl-block row">
                            <i class="fas fa-list col-1"></i>
                            <span class="col-10">Lists</span>
                        </span>
                    </a>
                </li>
<!--                <li class="list-group-item"><i class="fas fa-list"></i> Lists</li>-->
                <li class="list-group-item wd-side-bar">
                    <a href="../profile.html">
                        <i class="fas fa-user d-xl-none"></i>
                        <span class="d-none d-xl-block row">
                            <i class="fas fa-user col-1"></i>
                            <span class="col-10">Profile</span>
                        </span>
                    </a>
                </li>
<!--                <li class="list-group-item"><i class="fas fa-user"></i> Profile</li>-->
                <li class="list-group-item wd-side-bar">
                    <a href="#">
                        <i class="fas fa-chevron-circle-down d-xl-none"></i>

                        <span class="d-none d-xl-block row">
                            <i class="fas fa-chevron-circle-down col-1"></i>
                            <span class="col-10">More</span>
                        </span>
                    </a>
                </li>
<!--                <li class="list-group-item mb-2"><i class="fas fa-chevron-circle-down"></i> More</li>-->
            </ul>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}

// $('#wd-navbar').append(NavigationSidebar);

export default NavigationSidebar;