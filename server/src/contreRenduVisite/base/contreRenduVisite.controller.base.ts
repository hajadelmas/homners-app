import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ContreRenduVisiteService } from "../contreRenduVisite.service";
import { ContreRenduVisiteCreateInput } from "./ContreRenduVisiteCreateInput";
import { ContreRenduVisiteWhereInput } from "./ContreRenduVisiteWhereInput";
import { ContreRenduVisiteWhereUniqueInput } from "./ContreRenduVisiteWhereUniqueInput";
import { ContreRenduVisiteFindManyArgs } from "./ContreRenduVisiteFindManyArgs";
import { ContreRenduVisiteUpdateInput } from "./ContreRenduVisiteUpdateInput";
import { ContreRenduVisite } from "./ContreRenduVisite";
@swagger.ApiBearerAuth()
export class ContreRenduVisiteControllerBase {
  constructor(
    protected readonly service: ContreRenduVisiteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "ContreRenduVisite",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: ContreRenduVisite })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ContreRenduVisiteCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ContreRenduVisite> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "ContreRenduVisite",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"ContreRenduVisite"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        utilisateur: data.utilisateur
          ? {
              connect: data.utilisateur,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        dateVisite: true,
        id: true,
        updatedAt: true,

        utilisateur: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "ContreRenduVisite",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [ContreRenduVisite] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => ContreRenduVisiteFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ContreRenduVisite[]> {
    const args = plainToClass(ContreRenduVisiteFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ContreRenduVisite",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        dateVisite: true,
        id: true,
        updatedAt: true,

        utilisateur: {
          select: {
            id: true,
          },
        },
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "ContreRenduVisite",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: ContreRenduVisite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ContreRenduVisiteWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ContreRenduVisite | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ContreRenduVisite",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        dateVisite: true,
        id: true,
        updatedAt: true,

        utilisateur: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "ContreRenduVisite",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: ContreRenduVisite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ContreRenduVisiteWhereUniqueInput,
    @common.Body()
    data: ContreRenduVisiteUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ContreRenduVisite | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ContreRenduVisite",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"ContreRenduVisite"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          utilisateur: data.utilisateur
            ? {
                connect: data.utilisateur,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          dateVisite: true,
          id: true,
          updatedAt: true,

          utilisateur: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "ContreRenduVisite",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: ContreRenduVisite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ContreRenduVisiteWhereUniqueInput
  ): Promise<ContreRenduVisite | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          dateVisite: true,
          id: true,
          updatedAt: true,

          utilisateur: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
