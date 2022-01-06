import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ActionsAgentResolverBase } from "./base/actionsAgent.resolver.base";
import { ActionsAgent } from "./base/ActionsAgent";
import { ActionsAgentService } from "./actionsAgent.service";

@graphql.Resolver(() => ActionsAgent)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ActionsAgentResolver extends ActionsAgentResolverBase {
  constructor(
    protected readonly service: ActionsAgentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
