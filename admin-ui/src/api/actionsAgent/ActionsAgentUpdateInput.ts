import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ActionsAgentUpdateInput = {
  dateContreRenduRempli?: Date | null;
  dateRemontEAnnonce?: Date | null;
  dateVisite?: Date | null;
  utilisateur?: UserWhereUniqueInput | null;
};
