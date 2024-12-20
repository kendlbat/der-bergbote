import { useState } from "react";
import { Button } from "../ui/button";
import { ReactBergBalance } from "./react-balance";

export const VoucherForm: React.FC<{ coin: ImageMetadata }> = ({ coin }) => {
    const [voucher, setVoucher] = useState<string>("");
    const [lastRedemption, setLastRedemption] = useState<number | null>(null);

    return (
        <>
            <input
                type="text"
                value={voucher}
                onChange={(ev) => {
                    setVoucher(ev.target.value);
                }}
                spellCheck="false"
                placeholder="Voucher"
                className="rounded border-none p-1 px-3 bg-secondary"
            />
            <Button
                disabled={voucher.trim().length === 0}
                onClick={() => {
                    fetch("/api/vouchers/" + voucher, {
                        method: "POST",
                    }).then(async (res) => {
                        setVoucher("");
                        if (!res.ok) setLastRedemption(0);
                        else setLastRedemption(parseInt(await res.text()));
                    });
                }}
            >
                Submit
            </Button>
            {lastRedemption !== null && (
                <span>
                    {lastRedemption === 0 ? (
                        "Invalid voucher"
                    ) : (
                        <span className="text-[0.5em]">
                            <ReactBergBalance
                                amount={lastRedemption}
                                coin={coin}
                            />
                        </span>
                    )}
                </span>
            )}
        </>
    );
};
