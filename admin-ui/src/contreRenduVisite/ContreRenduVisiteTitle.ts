import { ContreRenduVisite as TContreRenduVisite } from "../api/contreRenduVisite/ContreRenduVisite";

export const CONTRERENDUVISITE_TITLE_FIELD = "id";

export const ContreRenduVisiteTitle = (record: TContreRenduVisite): string => {
  return record.id || record.id;
};
