import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ActionsAgentCreateInput = {
  dateContreRenduRempli?: Date | null;
  dateRemontEAnnonce?: Date | null;
  dateVisite?: Date | null;
  utilisateur?: UserWhereUniqueInput | null;
};
