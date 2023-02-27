const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter p-1"></i>
       <span class="d-none d-lg-inline"> Home </span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-hashtag p-1"></i>
       <span class="d-none d-lg-inline"> Explore</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-bell p-1"></i>
       <span class="d-none d-lg-inline"> Notifications</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-envelope p-1"></i>
       <span class="d-none d-lg-inline"> Messages </span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-bookmark p-1"></i>
       <span class="d-none d-lg-inline"> Bookmarks</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-list p-1"></i>
       <span class="d-none d-lg-inline"> Lists<span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-user p-1"></i>
       <span class="d-none d-lg-inline"> Profile</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-ellipsis-h p-1"></i>
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

