import { BidUpdateManyWithoutAuctionsInput } from "./BidUpdateManyWithoutAuctionsInput";
import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";

export type AuctionUpdateInput = {
  bids?: BidUpdateManyWithoutAuctionsInput;
  car?: CarWhereUniqueInput | null;
  currentBid?: number | null;
  endTime?: Date | null;
  entryFee?: number | null;
  startTime?: Date | null;
};
