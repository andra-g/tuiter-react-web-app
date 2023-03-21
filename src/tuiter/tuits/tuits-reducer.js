import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.webp",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "now",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        updateTuitLike(state, action) {
            const {id, val} = action.payload;
            const index = state
                .findIndex(tuit =>
                    tuit._id === id);
            const tuit = state.get(index);
            if (val == 1) {
                ++tuit.likes
            }
            else {
                --tuit.likes;
            }
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }
});

export const {createTuit, deleteTuit, updateTuitLike} = tuitsSlice.actions;
export default tuitsSlice.reducer;

