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
import { CreateActionsAgentArgs } from "./CreateActionsAgentArgs";
import { UpdateActionsAgentArgs } from "./UpdateActionsAgentArgs";
import { DeleteActionsAgentArgs } from "./DeleteActionsAgentArgs";
import { ActionsAgentFindManyArgs } from "./ActionsAgentFindManyArgs";
import { ActionsAgentFindUniqueArgs } from "./ActionsAgentFindUniqueArgs";
import { ActionsAgent } from "./ActionsAgent";
import { User } from "../../user/base/User";
import { ActionsAgentService } from "../actionsAgent.service";

@graphql.Resolver(() => ActionsAgent)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ActionsAgentResolverBase {
  constructor(
    protected readonly service: ActionsAgentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ActionsAgent",
    action: "read",
    possession: "any",
  })
  async _actionsAgentsMeta(
    @graphql.Args() args: ActionsAgentFindManyArgs
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

  @graphql.Query(() => [ActionsAgent])
  @nestAccessControl.UseRoles({
    resource: "ActionsAgent",
    action: "read",
    possession: "any",
  })
  async actionsAgents(
    @graphql.Args() args: ActionsAgentFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ActionsAgent[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ActionsAgent",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => ActionsAgent, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ActionsAgent",
    action: "read",
    possession: "own",
  })
  async actionsAgent(
    @graphql.Args() args: ActionsAgentFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ActionsAgent | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ActionsAgent",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => ActionsAgent)
  @nestAccessControl.UseRoles({
    resource: "ActionsAgent",
    action: "create",
    possession: "any",
  })
  async createActionsAgent(
    @graphql.Args() args: CreateActionsAgentArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ActionsAgent> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "ActionsAgent",
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
        `providing the properties: ${properties} on ${"ActionsAgent"} creation is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => ActionsAgent)
  @nestAccessControl.UseRoles({
    resource: "ActionsAgent",
    action: "update",
    possession: "any",
  })
  async updateActionsAgent(
    @graphql.Args() args: UpdateActionsAgentArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ActionsAgent | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ActionsAgent",
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
        `providing the properties: ${properties} on ${"ActionsAgent"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => ActionsAgent)
  @nestAccessControl.UseRoles({
    resource: "ActionsAgent",
    action: "delete",
    possession: "any",
  })
  async deleteActionsAgent(
    @graphql.Args() args: DeleteActionsAgentArgs
  ): Promise<ActionsAgent | null> {
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
    resource: "ActionsAgent",
    action: "read",
    possession: "any",
  })
  async utilisateur(
    @graphql.Parent() parent: ActionsAgent,
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
