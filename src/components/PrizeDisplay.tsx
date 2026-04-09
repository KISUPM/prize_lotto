import { useDispatch } from "react-redux";
import type { PrizeType } from "../store/LottoStore";
import { randomPrizeNumber } from "../store/LottoSlice";

interface PrizeDisplayProp {
    prize: PrizeType;
}

function PrizeDisplay({ prize }: PrizeDisplayProp) {
    const { rear, second, similar, won } = prize;
    const dispatch = useDispatch();
    return (
        <div className="p-2 border border-dark rounded-3 mt-2">
            <div className="w-100 d-flex align-middle mb-1 justify-content-between align-items-center">
                <span className="fw-bold">
                    ผลการออกรางวัลลอตเตอรี่ Diversition
                </span>
                <button
                    className="btn btn-primary d-inline"
                    onClick={() => {
                        dispatch(randomPrizeNumber());
                    }}>
                    {"🎲 ดำเนินการสุ่มรางวัล"}
                </button>
            </div>
            <div className="table-responsive">
                <table className="table table-hover text-center table-bordered border-dark">
                    <tbody>
                        <tr>
                            <td className="fw-bold w-50 bg-success text-white">
                                รางวัลที่ 1
                            </td>
                            <td colSpan={6} className="text-success fw-bold">
                                {won}
                            </td>
                        </tr>
                        <tr>
                            <td className="fw-bold w-50">
                                รางวัลใกล้เคียงรางวัลที่ 1
                            </td>
                            <td colSpan={3}>{similar[0]}</td>
                            <td colSpan={3}>{similar[1]}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold w-50">รางวัลที่ 2</td>
                            <td colSpan={2}>{second[0]}</td>
                            <td colSpan={2}>{second[1]}</td>
                            <td colSpan={2}>{second[2]}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold w-50">
                                รางวัลเลขท้าย 2 ตัว
                            </td>
                            <td colSpan={6}>{rear}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PrizeDisplay;
