import { BidListRelationFilter } from "../bid/BidListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProfessionWhereUniqueInput } from "../profession/ProfessionWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UserWhereInput = {
  bids?: BidListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  profession?: ProfessionWhereUniqueInput;
  username?: StringFilter;
  wallet?: IntNullableFilter;
};
