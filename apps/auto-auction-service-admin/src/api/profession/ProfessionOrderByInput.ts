import { SortOrder } from "../../util/SortOrder";

export type ProfessionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  initialCredit?: SortOrder;
  isReserved?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
