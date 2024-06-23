import { UserUpdateManyWithoutProfessionsInput } from "./UserUpdateManyWithoutProfessionsInput";

export type ProfessionUpdateInput = {
  initialCredit?: number | null;
  isReserved?: boolean | null;
  name?: string | null;
  users?: UserUpdateManyWithoutProfessionsInput;
};
