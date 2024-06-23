import { BidCreateNestedManyWithoutAuctionsInput } from "./BidCreateNestedManyWithoutAuctionsInput";
import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";

export type AuctionCreateInput = {
  bids?: BidCreateNestedManyWithoutAuctionsInput;
  car?: CarWhereUniqueInput | null;
  currentBid?: number | null;
  endTime?: Date | null;
  entryFee?: number | null;
  startTime?: Date | null;
};
