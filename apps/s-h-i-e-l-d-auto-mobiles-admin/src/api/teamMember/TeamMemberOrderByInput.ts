import { SortOrder } from "../../util/SortOrder";

export type TeamMemberOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  photoUrl?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
