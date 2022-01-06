import { ActionsAgent } from "../actionsAgent/ActionsAgent";
import { ContreRenduVisite } from "../contreRenduVisite/ContreRenduVisite";
import { MonBien } from "../monBien/MonBien";

export type User = {
  actionsAgents?: Array<ActionsAgent>;
  contreRenduVisites?: Array<ContreRenduVisite>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  monBiens?: Array<MonBien>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
