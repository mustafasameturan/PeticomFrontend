import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

const store = configureStore({
    reducer: {
        userStore: UserSlice
    }
});

export default store;