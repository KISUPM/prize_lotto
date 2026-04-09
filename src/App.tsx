/* eslint-disable react-hooks/exhaustive-deps */
import PrizeCheck from "./components/PrizeCheck";
import PrizeDisplay from "./components/PrizeDisplay";
import { useAppSelector } from "./hooks/hook";
import type { PrizeType } from "./store/LottoStore";
import { useEffect, useState } from "react";

function App() {
    const prize: PrizeType = useAppSelector((state) => state.lotto.prize);
    const [prizeState, setPrizeState] = useState<PrizeType>(prize);
    const [isLoaded, setIsLoaded] = useState(false);

    const saveResult = (prize: PrizeType) => {
        window.localStorage.setItem("prize", JSON.stringify(prize));
    };

    const loadResult = () => {
        const item = window.localStorage.getItem("prize");
        if (item && item != "undefined") {
            const obj: PrizeType = JSON.parse(item);
            setPrizeState(obj);
        } else {
            setPrizeState(prize);
        }
        setIsLoaded(true);
    };

    useEffect(() => {
        loadResult();
    }, []);

    useEffect(() => {
        if (isLoaded) {
            setPrizeState(prize);
            saveResult(prize);
        }
    }, [prize]);

    return (
        <div className="container">
            <div className="w-75 p-3 border border-dark mt-3 rounded-2 mx-auto">
                <h1 className="w-100 text-center">Diversition Lotto</h1>
                <PrizeDisplay prize={prizeState} />
                <hr />
                <PrizeCheck prize={prizeState} />
            </div>
        </div>
    );
}

export default App;
