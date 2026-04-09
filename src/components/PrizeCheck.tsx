/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import type { PrizeType } from "../store/LottoStore";
import PrizeCheckResult from "./PrizeCheckResult";

interface Prop {
    prize: PrizeType;
}
function PrizeCheck({ prize }: Prop) {
    const numInputRef = useRef(null);
    const [numInput, setNumInput] = useState("");

    const checkNum = () => {
        if (numInputRef) {
            const elem: HTMLInputElement = numInputRef.current!;
            const value = elem.value;
            if (value) {
                if (value.length != 3) {
                    alert("กรุณาระบุหมายเลข 3 หลัก");
                } else {
                    setNumInput(value);
                }
            } else {
                alert("กรุณาระบุหมายเลข");
            }
        }
    };

    useEffect(() => {
        if (numInput) {
            const elem: HTMLInputElement = numInputRef.current!;
            elem.value = "";
        }
    }, [prize]);

    return (
        <div className="p-2 border border-dark rounded-3 mt-2">
            <p className="fw-bold">ตรวจรางวัลล็อตเตอรี่ Diversition</p>
            <label htmlFor="lottoNumber" className="form-label">
                เลขล็อตเตอรี่ :
            </label>
            <input
                name="lottoNumber"
                id="lottoNumber"
                type="number"
                min={0}
                max={999}
                maxLength={3}
                className="form-control border-dark"
                ref={numInputRef}
            />
            <button className="btn btn-success mt-2" onClick={checkNum}>
                {"🔎 ตรวจรางวัล"}
            </button>
            <PrizeCheckResult prize={prize} num={numInput} />
        </div>
    );
}

export default PrizeCheck;
