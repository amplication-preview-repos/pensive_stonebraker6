import { UserCreateNestedManyWithoutProfessionsInput } from "./UserCreateNestedManyWithoutProfessionsInput";

export type ProfessionCreateInput = {
  initialCredit?: number | null;
  isReserved?: boolean | null;
  name?: string | null;
  users?: UserCreateNestedManyWithoutProfessionsInput;
};
