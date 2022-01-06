import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ContreRenduVisiteServiceBase } from "./base/contreRenduVisite.service.base";

@Injectable()
export class ContreRenduVisiteService extends ContreRenduVisiteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
