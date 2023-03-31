import React from "react";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={50} className="float-right rounded-circle" src={`/images/${post.image}`}/>
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                    <div>{post.userName}
                        <i className="fas fa-check-circle"></i>
                        {post.handle} : {post.time}
                    </div>
                    <div>{post.tuit}</div>
                </div>
                <TuitStats
                    key={post._id} post={post}/>
            </div>
        </li>
    );
};
export default TuitItem;

