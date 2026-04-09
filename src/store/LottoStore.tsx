import { configureStore } from "@reduxjs/toolkit";
import reducer from "./LottoSlice";

const store = configureStore({
    reducer: {
        lotto: reducer,
    },
});

const states = store.getState();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prizeType = () => states.lotto.prize

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type PrizeType = ReturnType<typeof prizeType>;
export type AppDispatch = typeof store.dispatch
