import { AuctionCreateNestedManyWithoutCarsInput } from "./AuctionCreateNestedManyWithoutCarsInput";

export type CarCreateInput = {
  auctions?: AuctionCreateNestedManyWithoutCarsInput;
  imageUrl?: string | null;
  make?: string | null;
  model?: string | null;
  startPrice?: number | null;
  year?: number | null;
};
