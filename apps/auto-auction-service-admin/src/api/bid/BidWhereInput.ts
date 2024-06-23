import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AuctionWhereUniqueInput } from "../auction/AuctionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BidWhereInput = {
  amount?: FloatNullableFilter;
  auction?: AuctionWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
