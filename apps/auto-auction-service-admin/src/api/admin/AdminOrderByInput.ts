import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
