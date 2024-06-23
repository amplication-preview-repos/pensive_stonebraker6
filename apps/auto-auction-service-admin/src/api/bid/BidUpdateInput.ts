import { AuctionWhereUniqueInput } from "../auction/AuctionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BidUpdateInput = {
  amount?: number | null;
  auction?: AuctionWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
