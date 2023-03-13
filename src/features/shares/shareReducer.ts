import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


export interface SharesData {
    example: string
}

const initialState: SharesData = {
    example: '',
} 

export const slice = createSlice({
    name: 'shareReducer',
    initialState, 
    reducers: {
        
    }
})

// export const {addUsername} = slice.actions;
//export const selectPersistUsername = (state: RootState) => state.shareReducer.userName;
export default slice.reducer;