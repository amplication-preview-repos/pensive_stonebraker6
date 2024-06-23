import { Bid } from "../bid/Bid";
import { Profession } from "../profession/Profession";
import { JsonValue } from "type-fest";

export type User = {
  bids?: Array<Bid>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  profession?: Profession | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  wallet: number | null;
};
