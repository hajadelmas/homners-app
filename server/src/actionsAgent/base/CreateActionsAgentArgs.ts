import { ArgsType, Field } from "@nestjs/graphql";
import { ActionsAgentCreateInput } from "./ActionsAgentCreateInput";

@ArgsType()
class CreateActionsAgentArgs {
  @Field(() => ActionsAgentCreateInput, { nullable: false })
  data!: ActionsAgentCreateInput;
}

export { CreateActionsAgentArgs };
