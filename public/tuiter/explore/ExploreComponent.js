import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
<div class="row mb-2">
            <div class="col-11 col-md-11 col-lg-11 col-xl-11">
                <i class="fa fa-search wd-search"></i>
                <input type="search"
                       class="rounded-pill wd-search-features"
                       id="search"
                       placeholder="Search Tuiter">
            </div>
            <div class="col-1 col-md-1 col-lg-1 col-xl-1">
                <i class="fa fa-cog fa-2x" style="color: royalblue"></i>
            </div>
        </div>
        <div class="row">
            <ul class="nav nav-tabs wd-reduce">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="-1">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#" tabindex="-1">Entertainment</a>
                </li>
            </ul>
        </div>
         <div class="card">
           <div class="wd-container">
                    <img src="../../images/starship.jpg"
                         class="card-img-top" alt="...">
                    <div class="wd-bottom-left">SpaceX's Starship</div>
           </div>
           ${PostSummaryList()}
         </div>
    `);
}
export default ExploreComponent;

