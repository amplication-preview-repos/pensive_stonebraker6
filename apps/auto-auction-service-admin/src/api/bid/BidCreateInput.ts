import { AuctionWhereUniqueInput } from "../auction/AuctionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BidCreateInput = {
  amount?: number | null;
  auction?: AuctionWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
