import { User } from "../user/User";

export type Profession = {
  createdAt: Date;
  id: string;
  initialCredit: number | null;
  isReserved: boolean | null;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
