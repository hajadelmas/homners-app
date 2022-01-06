import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MonBienServiceBase } from "./base/monBien.service.base";

@Injectable()
export class MonBienService extends MonBienServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
