import { MonBienWhereInput } from "./MonBienWhereInput";
import { MonBienOrderByInput } from "./MonBienOrderByInput";

export type MonBienFindManyArgs = {
  where?: MonBienWhereInput;
  orderBy?: MonBienOrderByInput;
  skip?: number;
  take?: number;
};
