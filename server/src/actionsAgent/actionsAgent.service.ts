import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ActionsAgentServiceBase } from "./base/actionsAgent.service.base";

@Injectable()
export class ActionsAgentService extends ActionsAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
