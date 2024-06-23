import { Module } from "@nestjs/common";
import { TeamMemberModuleBase } from "./base/teamMember.module.base";
import { TeamMemberService } from "./teamMember.service";
import { TeamMemberController } from "./teamMember.controller";
import { TeamMemberResolver } from "./teamMember.resolver";

@Module({
  imports: [TeamMemberModuleBase],
  controllers: [TeamMemberController],
  providers: [TeamMemberService, TeamMemberResolver],
  exports: [TeamMemberService],
})
export class TeamMemberModule {}
