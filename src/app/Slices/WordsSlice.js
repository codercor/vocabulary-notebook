import {createSlice} from '@reduxjs/toolkit';

export const WordsSlice = createSlice({
    name: 'words',
    initialState: [{
        id: 1,
        word: 'hello',
        translation: 'merhaba',
    }],
    reducers:{
        addWord: (state, action) => {
            let isExist = state.find(word => word.word === action.payload.word) && state.find(word => word.translation === action.payload.translation);
            if(!isExist) state.push(action.payload);
            else return false;
        },
        deleteWord: (state, action) => {
            state.filter(word => word.id !== action.payload.id);
        }
    }
});

export const {addWord, deleteWord} = WordsSlice.actions;
export default WordsSlice.reducer;