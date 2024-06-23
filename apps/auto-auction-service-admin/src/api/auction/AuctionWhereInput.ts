import { BidListRelationFilter } from "../bid/BidListRelationFilter";
import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AuctionWhereInput = {
  bids?: BidListRelationFilter;
  car?: CarWhereUniqueInput;
  currentBid?: FloatNullableFilter;
  endTime?: DateTimeNullableFilter;
  entryFee?: FloatNullableFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
};
