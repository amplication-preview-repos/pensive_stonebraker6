import { BidUpdateManyWithoutUsersInput } from "./BidUpdateManyWithoutUsersInput";
import { ProfessionWhereUniqueInput } from "../profession/ProfessionWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bids?: BidUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  profession?: ProfessionWhereUniqueInput | null;
  roles?: InputJsonValue;
  username?: string;
  wallet?: number | null;
};
