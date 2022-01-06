import { ActionsAgent as TActionsAgent } from "../api/actionsAgent/ActionsAgent";

export const ACTIONSAGENT_TITLE_FIELD = "id";

export const ActionsAgentTitle = (record: TActionsAgent): string => {
  return record.id || record.id;
};
