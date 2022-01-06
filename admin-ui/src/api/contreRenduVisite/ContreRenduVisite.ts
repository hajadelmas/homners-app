import { User } from "../user/User";

export type ContreRenduVisite = {
  createdAt: Date;
  dateVisite: Date | null;
  id: string;
  updatedAt: Date;
  utilisateur?: User | null;
};
