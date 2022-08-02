import { configureStore, createSlice } from "@reduxjs/toolkit";
import snsPhoto from "./store/snsPhotgSlice";
import dataSns from './store/snsDataSlice';
import iceCreamData from './store/icecreamSlice';
export default configureStore({
  reducer: {
    dataSns: dataSns.reducer,
    snsPhoto: snsPhoto.reducer,
    iceCreamData : iceCreamData.reducer,
  }
});
