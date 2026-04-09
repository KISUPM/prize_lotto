import { createSlice } from "@reduxjs/toolkit";

const randomNumber = (max: number = 999) =>
    Math.floor(Math.random() * (max + 1));

const toLottoNumber = (num: number, maxL: number = 3) =>
    num.toString().padStart(maxL, "0");

export const lottoSlice = createSlice({
    name: "lotto",
    initialState: {
        prize: {
            won: "",
            similar: ["", ""],
            second: ["", "", ""],
            rear: "",
        },
    },
    reducers: {
        randomPrizeNumber: (state) => {
            const won = randomNumber();
            let sim1 = "";
            let sim2 = "";
            if (won == 999) {
                sim1 = toLottoNumber(997);
                sim2 = toLottoNumber(998);
            } else {
                sim1 = toLottoNumber(won - 1);
                sim2 = toLottoNumber(won + 1);
            }
            const second1 = toLottoNumber(randomNumber());
            const second2 = toLottoNumber(randomNumber());
            const second3 = toLottoNumber(randomNumber());
            const rear = toLottoNumber(randomNumber(99), 2);
            state.prize.won = toLottoNumber(won);
            state.prize.similar = [sim1, sim2];
            state.prize.second = [second1, second2, second3];
            state.prize.rear = rear;
        },
    },
});

export const { randomPrizeNumber } = lottoSlice.actions;

export default lottoSlice.reducer;
