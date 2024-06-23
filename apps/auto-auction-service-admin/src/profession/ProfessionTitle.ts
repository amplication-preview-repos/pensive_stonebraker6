import { Profession as TProfession } from "../api/profession/Profession";

export const PROFESSION_TITLE_FIELD = "name";

export const ProfessionTitle = (record: TProfession): string => {
  return record.name?.toString() || String(record.id);
};
