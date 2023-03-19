import React from "react";
import TuitStats from "./tuit-stats";
import {deleteTuit} from "../tuits/tuits-reducer";
import {useDispatch} from "react-redux";

const TuitItem = (
    {
        post = {
            "userName": "SpaceX",
            "time": "2h",
            "image": "tesla.png",
            "handle": "@tesla",
            "tuit": "Something arrogant MuSk would tweet.",
            "liked": true, "replies": 123, "retuits": 432, "likes": 2345
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
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
                    <div>{post.title}</div>
                </div>
                <TuitStats/>
            </div>
        </li>
    );
};
export default TuitItem;

