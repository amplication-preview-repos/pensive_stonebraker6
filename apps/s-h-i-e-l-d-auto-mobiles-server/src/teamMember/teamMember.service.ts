import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeamMemberServiceBase } from "./base/teamMember.service.base";

@Injectable()
export class TeamMemberService extends TeamMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
