import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MonBienCreateInput = {
  lien: string;
  utilisateur?: UserWhereUniqueInput | null;
};
