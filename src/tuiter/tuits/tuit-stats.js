import React, {useState} from "react";
import "./tuit-stat.css"
import {useDispatch} from "react-redux";
import {decrementTuitLike, incrementTuitLike} from "./tuits-reducer";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    const incrementTuitLikeHandler = (id) => {
        dispatch(incrementTuitLike(id));
    }

    const decrementTuitLikeHandler = (id) => {
        dispatch(decrementTuitLike(id));
    }
    const [isLiked, setIsLiked] = useState(post.liked);
    let likeButton;
    if (isLiked) {
        likeButton = (<i className="fa fa-heart color-pink"
                         onClick={() => {setIsLiked(false);
                             decrementTuitLikeHandler(post._id);}}></i>);
    } else {
        likeButton = (<i className="fa fa-heart color-black"
                         onClick={() => {setIsLiked(true);
                             incrementTuitLikeHandler(post._id)}}></i>);
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

