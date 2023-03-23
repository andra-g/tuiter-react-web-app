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
        incrementTuitLike(state, action) {
            const tuitID= action.payload;
            const tuit = state.find(tuit => tuit._id === tuitID);
            ++tuit.likes;
        },
        decrementTuitLike(state, action) {
            const tuitID= action.payload;
            const tuit = state.find(tuit => tuit._id === tuitID);
            --tuit.likes;
        },
        deleteTuit(state, action) {
            console.log(state);
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

export const {createTuit, deleteTuit, incrementTuitLike, decrementTuitLike} = tuitsSlice.actions;
export default tuitsSlice.reducer;

