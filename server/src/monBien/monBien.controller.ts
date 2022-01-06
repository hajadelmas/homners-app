import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MonBienService } from "./monBien.service";
import { MonBienControllerBase } from "./base/monBien.controller.base";

@swagger.ApiTags("mon-biens")
@common.Controller("mon-biens")
export class MonBienController extends MonBienControllerBase {
  constructor(
    protected readonly service: MonBienService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
