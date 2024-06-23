import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProfessionServiceBase } from "./base/profession.service.base";

@Injectable()
export class ProfessionService extends ProfessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
