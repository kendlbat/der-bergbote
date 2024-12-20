import { db } from "@/db";
import { voucherRedemptions } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export const vouchers: Record<string, number> = {
    "5BHIF": 1000,
    TripoltSpatial: 5000,
    SorgerSenkDieMilchpreise: 1,
    KarlHeinz: 2000,
};

export async function tryRedeem(voucher: string, user: string) {
    if (vouchers[voucher]) {
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
            await db.insert(voucherRedemptions).values({
                user,
                voucher,
            });
            return vouchers[voucher];
        }
    }
    return 0;
}
