import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ProfessionWhereInput = {
  id?: StringFilter;
  initialCredit?: IntNullableFilter;
  isReserved?: BooleanNullableFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};
