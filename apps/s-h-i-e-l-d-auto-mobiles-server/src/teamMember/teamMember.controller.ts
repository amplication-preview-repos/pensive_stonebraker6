import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TeamMemberService } from "./teamMember.service";
import { TeamMemberControllerBase } from "./base/teamMember.controller.base";

@swagger.ApiTags("teamMembers")
@common.Controller("teamMembers")
export class TeamMemberController extends TeamMemberControllerBase {
  constructor(protected readonly service: TeamMemberService) {
    super(service);
  }
}
