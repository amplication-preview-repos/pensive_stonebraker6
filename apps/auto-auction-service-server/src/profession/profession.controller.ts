import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProfessionService } from "./profession.service";
import { ProfessionControllerBase } from "./base/profession.controller.base";

@swagger.ApiTags("professions")
@common.Controller("professions")
export class ProfessionController extends ProfessionControllerBase {
  constructor(
    protected readonly service: ProfessionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
