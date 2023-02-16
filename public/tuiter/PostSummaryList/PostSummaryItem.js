const PostSummaryItem = (post) => {
    return(`
       <div class="card">
                <div class="card-body row">
                    <div class="col-8">
                        <h7 class="card-title-grey">${post.topic}</h7><br>
                        <h7 class="card-title"><b>${post.userName} </b>
                            <i class="fas fa-check-circle"></i>
                            <span class="card-title-grey">- ${post.time}</span></h7>
                        <p class="card-text">
                            <b>${post.title}</b></p>
                    </div>
                    <div class="col-4">
                        <img class="wd-photo"
                             src="${post.image}">
                    </div>
                </div>
            </div>
        `);
}
export default PostSummaryItem;