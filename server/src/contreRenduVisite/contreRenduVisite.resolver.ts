import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ContreRenduVisiteResolverBase } from "./base/contreRenduVisite.resolver.base";
import { ContreRenduVisite } from "./base/ContreRenduVisite";
import { ContreRenduVisiteService } from "./contreRenduVisite.service";

@graphql.Resolver(() => ContreRenduVisite)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ContreRenduVisiteResolver extends ContreRenduVisiteResolverBase {
  constructor(
    protected readonly service: ContreRenduVisiteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
