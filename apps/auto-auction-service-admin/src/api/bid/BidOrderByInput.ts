import { SortOrder } from "../../util/SortOrder";

export type BidOrderByInput = {
  amount?: SortOrder;
  auctionId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};