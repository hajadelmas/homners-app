import { MonBien as TMonBien } from "../api/monBien/MonBien";

export const MONBIEN_TITLE_FIELD = "lien";

export const MonBienTitle = (record: TMonBien): string => {
  return record.lien || record.id;
};
