import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MonBienWhereInput = {
  id?: StringFilter;
  lien?: StringFilter;
  utilisateur?: UserWhereUniqueInput;
};
