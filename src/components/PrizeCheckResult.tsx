/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import type { PrizeType } from "../store/LottoStore";

interface Prop {
    prize: PrizeType;
    num: string;
}
function PrizeCheckResult({ prize, num }: Prop) {
    const [isChecked, setIsChecked] = useState(false);
    const [isWonPrize, setIsWonPrize] = useState(false);
    const [reward, setReward] = useState<string>("");

    const prizeCheck = (numCheck: string) => {
        setIsChecked(false);
        const temp = [];
        const { rear, second, similar, won } = prize;

        if (numCheck === won) {
            temp.push(`รางวัลที่ 1 หมายเลข ${won}`);
        }

        if (numCheck.substring(1) === rear) {
            temp.push(`รางวัลที่เลขท้าย 2 ตัว หมายเลข ${rear}`);
        }

        const idxSecond = second.indexOf(numCheck);
        if (idxSecond > -1) {
            temp.push(`รางวัลที่ 2 หมายเลข ${second[idxSecond]}`);
        }

        const idxSimilar = similar.indexOf(numCheck);
        if (idxSimilar > -1) {
            temp.push(
                `รางวัลใกล้เคียงรางวัลที่ 1 หมายเลข ${similar[idxSimilar]}`,
            );
        }

        if (temp.length > 0) {
            setIsWonPrize(true);
            let textReward = "ขอแสดงความยินดี🎉 คุณถูกรางวัลต่อไปนี้: ";
            temp.forEach((t) => (textReward += t + " "));
            setReward(textReward.trim());
        } else {
            setIsWonPrize(false);
            const textReward = "ขอแสดงความเสียใจด้วย คุณไม่ถูกรางวัลใดๆเลย";
            setReward(textReward);
        }

        setIsChecked(true);
    };

    useEffect(() => {
        if (num !== "") {
            prizeCheck(num);
        }
    }, [num]);

    useEffect(() => {
        setIsChecked(false);
        setIsWonPrize(false);
        setReward("");
    }, [prize]);
    return (
        isChecked && (
            <div>
                <p className="fw-bold">{"ผลการตรวจ"}</p>
                <div
                    className={`${isWonPrize ? "bg-success" : "bg-danger"} text-white p-1 rounded-1`}>
                    <p>{reward}</p>
                </div>
            </div>
        )
    );
}

export default PrizeCheckResult;
