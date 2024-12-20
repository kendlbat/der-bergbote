import { db } from "@/db";
import { balance, inventory, voucherRedemptions } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { items } from "./items";

export const vouchers: Record<string, number | string> = {
    "5BHIF": 1000,
    TripoltSpatial: "e20",
    SorgerSenkDieMilchpreise: 1,
    KarlHeinz: 2000,
    test: "e1",
};

export async function tryRedeem(voucher: string, user: string) {
    if (vouchers[voucher]) {
        const v = vouchers[voucher];
        let ret: number | string = 0;

        const redeemed =
            (
                await db
                    .select()
                    .from(voucherRedemptions)
                    .where(
                        and(
                            eq(voucherRedemptions.user, user),
                            eq(voucherRedemptions.voucher, voucher)
                        )
                    )
            ).length > 0;
        if (!redeemed) {
            if (typeof v === "number") {
                const bal =
                    (
                        await db
                            .select({ amount: balance.amount })
                            .from(balance)
                            .where(eq(balance.user, user))
                    )[0]?.amount || 0;
                await db
                    .update(balance)
                    .set({ amount: bal + v })
                    .where(eq(balance.user, user));
                ret = v;
            } else {
                if (!items[v]) return 0;
                const hasItem = await db
                    .select()
                    .from(inventory)
                    .where(
                        and(eq(inventory.user, user), eq(inventory.item, v))
                    );
                if (hasItem.length === 0) {
                    await db.insert(inventory).values({
                        user,
                        item: v,
                    });
                    ret = `Item erhalten: ${items[v].name}`;
                } else {
                    ret = `Du hast dieses Item bereits!`;
                    return ret;
                }
            }

            await db.insert(voucherRedemptions).values({
                user,
                voucher,
            });
            return vouchers[voucher];
        }
    }
    return 0;
}
