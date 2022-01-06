import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateContreRenduVisiteArgs } from "./CreateContreRenduVisiteArgs";
import { UpdateContreRenduVisiteArgs } from "./UpdateContreRenduVisiteArgs";
import { DeleteContreRenduVisiteArgs } from "./DeleteContreRenduVisiteArgs";
import { ContreRenduVisiteFindManyArgs } from "./ContreRenduVisiteFindManyArgs";
import { ContreRenduVisiteFindUniqueArgs } from "./ContreRenduVisiteFindUniqueArgs";
import { ContreRenduVisite } from "./ContreRenduVisite";
import { User } from "../../user/base/User";
import { ContreRenduVisiteService } from "../contreRenduVisite.service";

@graphql.Resolver(() => ContreRenduVisite)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ContreRenduVisiteResolverBase {
  constructor(
    protected readonly service: ContreRenduVisiteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ContreRenduVisite",
    action: "read",
    possession: "any",
  })
  async _contreRenduVisitesMeta(
    @graphql.Args() args: ContreRenduVisiteFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [ContreRenduVisite])
  @nestAccessControl.UseRoles({
    resource: "ContreRenduVisite",
    action: "read",
    possession: "any",
  })
  async contreRenduVisites(
    @graphql.Args() args: ContreRenduVisiteFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ContreRenduVisite[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ContreRenduVisite",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => ContreRenduVisite, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ContreRenduVisite",
    action: "read",
    possession: "own",
  })
  async contreRenduVisite(
    @graphql.Args() args: ContreRenduVisiteFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ContreRenduVisite | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ContreRenduVisite",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => ContreRenduVisite)
  @nestAccessControl.UseRoles({
    resource: "ContreRenduVisite",
    action: "create",
    possession: "any",
  })
  async createContreRenduVisite(
    @graphql.Args() args: CreateContreRenduVisiteArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ContreRenduVisite> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "ContreRenduVisite",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"ContreRenduVisite"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        utilisateur: args.data.utilisateur
          ? {
              connect: args.data.utilisateur,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ContreRenduVisite)
  @nestAccessControl.UseRoles({
    resource: "ContreRenduVisite",
    action: "update",
    possession: "any",
  })
  async updateContreRenduVisite(
    @graphql.Args() args: UpdateContreRenduVisiteArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ContreRenduVisite | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ContreRenduVisite",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"ContreRenduVisite"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          utilisateur: args.data.utilisateur
            ? {
                connect: args.data.utilisateur,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ContreRenduVisite)
  @nestAccessControl.UseRoles({
    resource: "ContreRenduVisite",
    action: "delete",
    possession: "any",
  })
  async deleteContreRenduVisite(
    @graphql.Args() args: DeleteContreRenduVisiteArgs
  ): Promise<ContreRenduVisite | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ContreRenduVisite",
    action: "read",
    possession: "any",
  })
  async utilisateur(
    @graphql.Parent() parent: ContreRenduVisite,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const result = await this.service.getUtilisateur(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
