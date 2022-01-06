import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MonBienUpdateInput = {
  lien?: string;
  utilisateur?: UserWhereUniqueInput | null;
};
