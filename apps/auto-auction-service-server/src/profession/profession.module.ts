import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProfessionModuleBase } from "./base/profession.module.base";
import { ProfessionService } from "./profession.service";
import { ProfessionController } from "./profession.controller";
import { ProfessionResolver } from "./profession.resolver";

@Module({
  imports: [ProfessionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProfessionController],
  providers: [ProfessionService, ProfessionResolver],
  exports: [ProfessionService],
})
export class ProfessionModule {}
