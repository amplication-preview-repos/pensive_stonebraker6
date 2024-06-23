import { Admin as TAdmin } from "../api/admin/Admin";

export const ADMIN_TITLE_FIELD = "role";

export const AdminTitle = (record: TAdmin): string => {
  return record.role?.toString() || String(record.id);
};
