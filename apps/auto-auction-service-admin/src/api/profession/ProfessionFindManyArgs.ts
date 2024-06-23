import { ProfessionWhereInput } from "./ProfessionWhereInput";
import { ProfessionOrderByInput } from "./ProfessionOrderByInput";

export type ProfessionFindManyArgs = {
  where?: ProfessionWhereInput;
  orderBy?: Array<ProfessionOrderByInput>;
  skip?: number;
  take?: number;
};
