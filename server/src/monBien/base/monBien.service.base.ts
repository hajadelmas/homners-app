import { PrismaService } from "nestjs-prisma";
import { Prisma, MonBien, User } from "@prisma/client";

export class MonBienServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MonBienFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MonBienFindManyArgs>
  ): Promise<number> {
    return this.prisma.monBien.count(args);
  }

  async findMany<T extends Prisma.MonBienFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MonBienFindManyArgs>
  ): Promise<MonBien[]> {
    return this.prisma.monBien.findMany(args);
  }
  async findOne<T extends Prisma.MonBienFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MonBienFindUniqueArgs>
  ): Promise<MonBien | null> {
    return this.prisma.monBien.findUnique(args);
  }
  async create<T extends Prisma.MonBienCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MonBienCreateArgs>
  ): Promise<MonBien> {
    return this.prisma.monBien.create<T>(args);
  }
  async update<T extends Prisma.MonBienUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MonBienUpdateArgs>
  ): Promise<MonBien> {
    return this.prisma.monBien.update<T>(args);
  }
  async delete<T extends Prisma.MonBienDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MonBienDeleteArgs>
  ): Promise<MonBien> {
    return this.prisma.monBien.delete(args);
  }

  async getUtilisateur(parentId: string): Promise<User | null> {
    return this.prisma.monBien
      .findUnique({
        where: { id: parentId },
      })
      .utilisateur();
  }
}
