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
import { ActionsAgentService } from "../actionsAgent.service";
import { ActionsAgentCreateInput } from "./ActionsAgentCreateInput";
import { ActionsAgentWhereInput } from "./ActionsAgentWhereInput";
import { ActionsAgentWhereUniqueInput } from "./ActionsAgentWhereUniqueInput";
import { ActionsAgentFindManyArgs } from "./ActionsAgentFindManyArgs";
import { ActionsAgentUpdateInput } from "./ActionsAgentUpdateInput";
import { ActionsAgent } from "./ActionsAgent";
@swagger.ApiBearerAuth()
export class ActionsAgentControllerBase {
  constructor(
    protected readonly service: ActionsAgentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "ActionsAgent",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: ActionsAgent })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ActionsAgentCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ActionsAgent> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "ActionsAgent",
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
        `providing the properties: ${properties} on ${"ActionsAgent"} creation is forbidden for roles: ${roles}`
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
        dateContreRenduRempli: true,
        dateRemontEAnnonce: true,
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
    resource: "ActionsAgent",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [ActionsAgent] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => ActionsAgentFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ActionsAgent[]> {
    const args = plainToClass(ActionsAgentFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ActionsAgent",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        dateContreRenduRempli: true,
        dateRemontEAnnonce: true,
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
    resource: "ActionsAgent",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: ActionsAgent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ActionsAgentWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ActionsAgent | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ActionsAgent",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        dateContreRenduRempli: true,
        dateRemontEAnnonce: true,
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
    resource: "ActionsAgent",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: ActionsAgent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ActionsAgentWhereUniqueInput,
    @common.Body()
    data: ActionsAgentUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ActionsAgent | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ActionsAgent",
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
        `providing the properties: ${properties} on ${"ActionsAgent"} update is forbidden for roles: ${roles}`
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
          dateContreRenduRempli: true,
          dateRemontEAnnonce: true,
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
    resource: "ActionsAgent",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: ActionsAgent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ActionsAgentWhereUniqueInput
  ): Promise<ActionsAgent | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          dateContreRenduRempli: true,
          dateRemontEAnnonce: true,
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
