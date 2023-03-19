import React from "react";
const TuitStats = (
    {
        post = {
            "liked": true, "replies": 123, "retuits": 432, "likes": 2345
        }
    }
) => {
    return(
            <div className="row mt-2">
                <div className="col-2"></div>
                <div className="col-3">
                    <i className="far fa-comment fa-fw"></i>
                    {post.replies}
                </div>
                <div className="col-3">
                    <i className="fa fa-retweet fa-fw"></i>
                    {post.retuits}
                </div>
                <div className="col-2">
                    <i className="fas fa-heart fa-fw"></i>
                    {post.likes}
                </div>
                <div className="col-2">
                    <i className="fas fa-share-alt"></i>
                </div>
            </div>
    );
};
export default TuitStats;

