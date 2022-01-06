import { PrismaService } from "nestjs-prisma";
import { Prisma, ActionsAgent, User } from "@prisma/client";

export class ActionsAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ActionsAgentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ActionsAgentFindManyArgs>
  ): Promise<number> {
    return this.prisma.actionsAgent.count(args);
  }

  async findMany<T extends Prisma.ActionsAgentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ActionsAgentFindManyArgs>
  ): Promise<ActionsAgent[]> {
    return this.prisma.actionsAgent.findMany(args);
  }
  async findOne<T extends Prisma.ActionsAgentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ActionsAgentFindUniqueArgs>
  ): Promise<ActionsAgent | null> {
    return this.prisma.actionsAgent.findUnique(args);
  }
  async create<T extends Prisma.ActionsAgentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ActionsAgentCreateArgs>
  ): Promise<ActionsAgent> {
    return this.prisma.actionsAgent.create<T>(args);
  }
  async update<T extends Prisma.ActionsAgentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ActionsAgentUpdateArgs>
  ): Promise<ActionsAgent> {
    return this.prisma.actionsAgent.update<T>(args);
  }
  async delete<T extends Prisma.ActionsAgentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ActionsAgentDeleteArgs>
  ): Promise<ActionsAgent> {
    return this.prisma.actionsAgent.delete(args);
  }

  async getUtilisateur(parentId: string): Promise<User | null> {
    return this.prisma.actionsAgent
      .findUnique({
        where: { id: parentId },
      })
      .utilisateur();
  }
}
