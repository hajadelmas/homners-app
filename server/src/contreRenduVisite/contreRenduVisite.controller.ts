import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContreRenduVisiteService } from "./contreRenduVisite.service";
import { ContreRenduVisiteControllerBase } from "./base/contreRenduVisite.controller.base";

@swagger.ApiTags("contre-rendu-visites")
@common.Controller("contre-rendu-visites")
export class ContreRenduVisiteController extends ContreRenduVisiteControllerBase {
  constructor(
    protected readonly service: ContreRenduVisiteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
