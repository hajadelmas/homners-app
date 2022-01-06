import { Module } from "@nestjs/common";
import { ActionsAgentModuleBase } from "./base/actionsAgent.module.base";
import { ActionsAgentService } from "./actionsAgent.service";
import { ActionsAgentController } from "./actionsAgent.controller";
import { ActionsAgentResolver } from "./actionsAgent.resolver";

@Module({
  imports: [ActionsAgentModuleBase],
  controllers: [ActionsAgentController],
  providers: [ActionsAgentService, ActionsAgentResolver],
  exports: [ActionsAgentService],
})
export class ActionsAgentModule {}
