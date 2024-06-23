import { Bid } from "../bid/Bid";
import { Car } from "../car/Car";

export type Auction = {
  bids?: Array<Bid>;
  car?: Car | null;
  createdAt: Date;
  currentBid: number | null;
  endTime: Date | null;
  entryFee: number | null;
  id: string;
  startTime: Date | null;
  updatedAt: Date;
};
