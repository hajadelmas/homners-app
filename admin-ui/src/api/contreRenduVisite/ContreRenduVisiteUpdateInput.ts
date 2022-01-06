import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContreRenduVisiteUpdateInput = {
  dateVisite?: Date | null;
  utilisateur?: UserWhereUniqueInput | null;
};
