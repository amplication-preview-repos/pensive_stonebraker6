import { Auction } from "../auction/Auction";

export type Car = {
  auctions?: Array<Auction>;
  createdAt: Date;
  id: string;
  imageUrl: string | null;
  make: string | null;
  model: string | null;
  startPrice: number | null;
  updatedAt: Date;
  year: number | null;
};
