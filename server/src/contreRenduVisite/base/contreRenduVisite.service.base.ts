import { PrismaService } from "nestjs-prisma";
import { Prisma, ContreRenduVisite, User } from "@prisma/client";

export class ContreRenduVisiteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ContreRenduVisiteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContreRenduVisiteFindManyArgs>
  ): Promise<number> {
    return this.prisma.contreRenduVisite.count(args);
  }

  async findMany<T extends Prisma.ContreRenduVisiteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContreRenduVisiteFindManyArgs>
  ): Promise<ContreRenduVisite[]> {
    return this.prisma.contreRenduVisite.findMany(args);
  }
  async findOne<T extends Prisma.ContreRenduVisiteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContreRenduVisiteFindUniqueArgs>
  ): Promise<ContreRenduVisite | null> {
    return this.prisma.contreRenduVisite.findUnique(args);
  }
  async create<T extends Prisma.ContreRenduVisiteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContreRenduVisiteCreateArgs>
  ): Promise<ContreRenduVisite> {
    return this.prisma.contreRenduVisite.create<T>(args);
  }
  async update<T extends Prisma.ContreRenduVisiteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContreRenduVisiteUpdateArgs>
  ): Promise<ContreRenduVisite> {
    return this.prisma.contreRenduVisite.update<T>(args);
  }
  async delete<T extends Prisma.ContreRenduVisiteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContreRenduVisiteDeleteArgs>
  ): Promise<ContreRenduVisite> {
    return this.prisma.contreRenduVisite.delete(args);
  }

  async getUtilisateur(parentId: string): Promise<User | null> {
    return this.prisma.contreRenduVisite
      .findUnique({
        where: { id: parentId },
      })
      .utilisateur();
  }
}
