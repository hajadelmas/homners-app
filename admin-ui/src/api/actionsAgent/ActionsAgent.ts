import { User } from "../user/User";

export type ActionsAgent = {
  createdAt: Date;
  dateContreRenduRempli: Date | null;
  dateRemontEAnnonce: Date | null;
  dateVisite: Date | null;
  id: string;
  updatedAt: Date;
  utilisateur?: User | null;
};
