import { createSlice } from '@reduxjs/toolkit';

export const WordsSlice = createSlice({
    name: 'words',
    initialState: [
        {
            id: 1,
            word: 'hello',
            translation: 'merhaba',
            swipeRotation: "center",
        },
        {
            id: 2,
            word: 'hello',
            translation: 'merhaba',
            swipeRotation: "center",
        },
        {
            id: 3,
            word: 'hello',
            translation: 'merhaba',
            swipeRotation: "center",
        },
        {
            id: 4,
            word: 'hello',
            translation: 'merhaba',
            swipeRotation: "center",
        },
    ],
    reducers: {
        addWord: (state, action) => {
            let isExist = state.find(word => word.word === action.payload.word) && state.find(word => word.translation === action.payload.translation);
            if (!isExist) state.push({...action.payload, swipeRotation: "center"});
            else return false;
        },
        deleteWord: (state, action) => {
            console.log("silme gibi bişey oldu")
            state= state.filter(word => word.id !== action.payload.id);
            return state;
        },
        updateWord: (state,action) =>{
            state.forEach(word => {
                if(word.id === action.payload.id) {
                    word.word = action.payload.word;
                    word.translation = action.payload.translation;
                }
            });
            return state;
        },
        setAllSwipeRotation: (state, action) => {
            console.log("setAllSwipeRotation", action.payload);
            state.forEach(word => {
            
                if(word.id != action.payload.id) word.swipeRotation = "center";
            });
        },
        setOneSwipeRotation: (state, action) => {
            console.log("neden ?");
            state.forEach(word => {
                if(word.id == action.payload.id) {
                    word.swipeRotation = action.payload.swipeRotation;
                }
            });
        }
    }
});

export const { addWord, deleteWord, setAllSwipeRotation,setOneSwipeRotation,updateWord } = WordsSlice.actions;
export default WordsSlice.reducer;