import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
  startPrice?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
