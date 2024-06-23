import { Car as TCar } from "../api/car/Car";

export const CAR_TITLE_FIELD = "imageUrl";

export const CarTitle = (record: TCar): string => {
  return record.imageUrl?.toString() || String(record.id);
};
