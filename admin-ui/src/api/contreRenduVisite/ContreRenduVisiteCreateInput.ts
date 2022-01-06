import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContreRenduVisiteCreateInput = {
  dateVisite?: Date | null;
  utilisateur?: UserWhereUniqueInput | null;
};
