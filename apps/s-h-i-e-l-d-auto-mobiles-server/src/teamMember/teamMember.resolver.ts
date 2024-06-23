import * as graphql from "@nestjs/graphql";
import { TeamMemberResolverBase } from "./base/teamMember.resolver.base";
import { TeamMember } from "./base/TeamMember";
import { TeamMemberService } from "./teamMember.service";

@graphql.Resolver(() => TeamMember)
export class TeamMemberResolver extends TeamMemberResolverBase {
  constructor(protected readonly service: TeamMemberService) {
    super(service);
  }
}
