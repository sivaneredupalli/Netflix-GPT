import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userSlice";
import moviereducer from "../utils/movieSlice"

const appStore = configureStore(
    {
        reducer : {
            user : userreducer,
            movie : moviereducer,
        }
    }
)
export default appStore;