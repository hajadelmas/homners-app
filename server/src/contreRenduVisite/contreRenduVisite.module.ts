import { Module } from "@nestjs/common";
import { ContreRenduVisiteModuleBase } from "./base/contreRenduVisite.module.base";
import { ContreRenduVisiteService } from "./contreRenduVisite.service";
import { ContreRenduVisiteController } from "./contreRenduVisite.controller";
import { ContreRenduVisiteResolver } from "./contreRenduVisite.resolver";

@Module({
  imports: [ContreRenduVisiteModuleBase],
  controllers: [ContreRenduVisiteController],
  providers: [ContreRenduVisiteService, ContreRenduVisiteResolver],
  exports: [ContreRenduVisiteService],
})
export class ContreRenduVisiteModule {}
