import React, {useState} from "react";
import "./tuit-stat.css"
import {useDispatch} from "react-redux";
import {updateTuitThunk}
    from "../../services/tuits-thunks";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(post.liked);
    let likeButton;
    if (isLiked) {
        likeButton = (<i onClick={() => {setIsLiked(false);
            dispatch(updateTuitThunk({
            ...post,
            likes: post.likes - 1
        }));}} className="fa fa-heart color-pink"></i>);
    } else {
        likeButton = (<i onClick={() => {setIsLiked(true);
            dispatch(updateTuitThunk({
            ...post,
            likes: post.likes + 1
        }));}} className="fa fa-heart color-black"></i>);
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

