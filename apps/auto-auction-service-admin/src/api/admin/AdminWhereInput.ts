import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AdminWhereInput = {
  id?: StringFilter;
  role?: StringNullableFilter;
};
