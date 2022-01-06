import { Module } from "@nestjs/common";
import { MonBienModuleBase } from "./base/monBien.module.base";
import { MonBienService } from "./monBien.service";
import { MonBienController } from "./monBien.controller";
import { MonBienResolver } from "./monBien.resolver";

@Module({
  imports: [MonBienModuleBase],
  controllers: [MonBienController],
  providers: [MonBienService, MonBienResolver],
  exports: [MonBienService],
})
export class MonBienModule {}
