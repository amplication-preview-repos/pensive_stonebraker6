import { AuctionUpdateManyWithoutCarsInput } from "./AuctionUpdateManyWithoutCarsInput";

export type CarUpdateInput = {
  auctions?: AuctionUpdateManyWithoutCarsInput;
  imageUrl?: string | null;
  make?: string | null;
  model?: string | null;
  startPrice?: number | null;
  year?: number | null;
};
