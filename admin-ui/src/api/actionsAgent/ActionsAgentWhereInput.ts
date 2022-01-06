import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ActionsAgentWhereInput = {
  dateContreRenduRempli?: DateTimeNullableFilter;
  dateRemontEAnnonce?: DateTimeNullableFilter;
  dateVisite?: DateTimeNullableFilter;
  id?: StringFilter;
  utilisateur?: UserWhereUniqueInput;
};
