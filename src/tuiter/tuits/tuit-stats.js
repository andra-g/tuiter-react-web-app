import React, {useState} from "react";
import "./tuit-stat.css"
import {useDispatch} from "react-redux";
import {updateTuitLike} from "./tuits-reducer";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    const updateTuitLikeHandler = (id, val) => {
        dispatch(updateTuitLike(id, val));
        console.log("sent the updateTuit Like");
    }
    const [isLiked, setIsLiked] = useState(post.liked);
    let likeButton;
    if (isLiked) {
        likeButton = (<i className="fa fa-heart color-pink"
                         onClick={() => {setIsLiked(false);
                             updateTuitLikeHandler(post._id, -1);}}></i>);
    } else {
        likeButton = (<i className="fa fa-heart color-black"
                         onClick={() => {setIsLiked(true);
                             updateTuitLikeHandler(post._id, 1)}}></i>);
    }
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
                    {likeButton}
                    {post.likes}
                </div>
                <div className="col-2">
                    <i className="fas fa-share-alt"></i>
                </div>
            </div>
    );
};
export default TuitStats;

