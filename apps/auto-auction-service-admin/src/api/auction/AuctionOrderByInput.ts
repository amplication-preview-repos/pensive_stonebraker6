import { SortOrder } from "../../util/SortOrder";

export type AuctionOrderByInput = {
  carId?: SortOrder;
  createdAt?: SortOrder;
  currentBid?: SortOrder;
  endTime?: SortOrder;
  entryFee?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
