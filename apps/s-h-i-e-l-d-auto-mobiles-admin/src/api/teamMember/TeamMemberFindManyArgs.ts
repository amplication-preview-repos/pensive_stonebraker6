import { TeamMemberWhereInput } from "./TeamMemberWhereInput";
import { TeamMemberOrderByInput } from "./TeamMemberOrderByInput";

export type TeamMemberFindManyArgs = {
  where?: TeamMemberWhereInput;
  orderBy?: Array<TeamMemberOrderByInput>;
  skip?: number;
  take?: number;
};
