const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i>
       <span class="d-none d-lg-inline"> Home </span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-hashtag"></i>
       <span class="d-none d-lg-inline"> Explore</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-bell"></i>
       <span class="d-none d-lg-inline"> Notifications</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-envelope"></i>
       <span class="d-none d-lg-inline"> Messages </span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-bookmark"></i>
       <span class="d-none d-lg-inline"> Bookmarks</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-list"></i>
       <span class="d-none d-lg-inline"> Lists<span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-user"></i>
       <span class="d-none d-lg-inline"> Profile</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-ellipsis-h"></i>
       <span class="d-none d-lg-inline"> More</span></a>
       
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

