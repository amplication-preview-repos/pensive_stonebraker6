import { AuctionListRelationFilter } from "../auction/AuctionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CarWhereInput = {
  auctions?: AuctionListRelationFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
  startPrice?: FloatNullableFilter;
  year?: IntNullableFilter;
};
