import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userSlice";
import moviereducer from "../utils/movieSlice"
import gptreducer from "./gptSlice"
import configreducer from "./configSlice"
const appStore = configureStore(
    {
        reducer : {
            user : userreducer,
            movie : moviereducer,
            gptSearch : gptreducer,
            config: configreducer,
        }
    }
)
export default appStore;