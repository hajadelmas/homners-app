import { User } from "../user/User";

export type MonBien = {
  createdAt: Date;
  id: string;
  lien: string;
  updatedAt: Date;
  utilisateur?: User | null;
};
