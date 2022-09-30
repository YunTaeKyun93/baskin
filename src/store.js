import { configureStore, createSlice } from "@reduxjs/toolkit";
import snsPhoto from "./store/snsPhotgSlice";
import dataSns from "./store/snsDataSlice";
import iceCreamData from "./store/icecreamSlice";
import iceCreamRank from "./store/icecreamRank";
import iceCreamCakeData from "./store/icecreamcakeSlice";
import dessertData from "./store/dessertSlice";
import drinktData from "./store/drinkSlice";

let currentMenu = createSlice({
  name: "currentMenu",
  initialState: { name: "icecream" },
  reducers: {
    changeMenu(state, dispatch) {
      state.name = dispatch.payload;
    }
  }
});
export let { changeMenu } = currentMenu.actions;
export default configureStore({
  reducer: {
    dataSns: dataSns.reducer,
    snsPhoto: snsPhoto.reducer,
    icecream: iceCreamData.reducer,
    iceCreamRank: iceCreamRank.reducer,
    icecreamcake: iceCreamCakeData.reducer,
    dessert: dessertData.reducer,
    drink: drinktData.reducer,
    currentMenu: currentMenu.reducer
  }
});
