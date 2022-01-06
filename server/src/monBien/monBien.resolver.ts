import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MonBienResolverBase } from "./base/monBien.resolver.base";
import { MonBien } from "./base/MonBien";
import { MonBienService } from "./monBien.service";

@graphql.Resolver(() => MonBien)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MonBienResolver extends MonBienResolverBase {
  constructor(
    protected readonly service: MonBienService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
