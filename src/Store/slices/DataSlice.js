import { createSlice } from "@reduxjs/toolkit";

const getData = JSON.parse(localStorage.getItem("data"))
const Data = [];
if (getData) {
  getData.forEach((e) => {
    Data.push(e)
  });
}

const dataSlice = createSlice({
    initialState: Data,
    name: "dataSlice",
    reducers: {
        addToData: (state, action) => {
            const finditem = state.find((item) => item.id === action.payload.id)
            if(!finditem){
                state.push(action.payload)
            }
        },
        deleteItemFormData: (state, action) =>  {
            return state.filter((item) => item.id !== action.payload.id)
        }
    }
})

export const {addToData, deleteItemFormData} = dataSlice.actions
export default dataSlice.reducer