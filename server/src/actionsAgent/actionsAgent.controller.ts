import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ActionsAgentService } from "./actionsAgent.service";
import { ActionsAgentControllerBase } from "./base/actionsAgent.controller.base";

@swagger.ApiTags("actions-agents")
@common.Controller("actions-agents")
export class ActionsAgentController extends ActionsAgentControllerBase {
  constructor(
    protected readonly service: ActionsAgentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
