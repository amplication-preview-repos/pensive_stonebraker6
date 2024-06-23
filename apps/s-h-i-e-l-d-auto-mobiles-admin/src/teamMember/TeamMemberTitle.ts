import { TeamMember as TTeamMember } from "../api/teamMember/TeamMember";

export const TEAMMEMBER_TITLE_FIELD = "name";

export const TeamMemberTitle = (record: TTeamMember): string => {
  return record.name?.toString() || String(record.id);
};
