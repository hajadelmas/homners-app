import { ArgsType, Field } from "@nestjs/graphql";
import { ActionsAgentWhereUniqueInput } from "./ActionsAgentWhereUniqueInput";
import { ActionsAgentUpdateInput } from "./ActionsAgentUpdateInput";

@ArgsType()
class UpdateActionsAgentArgs {
  @Field(() => ActionsAgentWhereUniqueInput, { nullable: false })
  where!: ActionsAgentWhereUniqueInput;
  @Field(() => ActionsAgentUpdateInput, { nullable: false })
  data!: ActionsAgentUpdateInput;
}

export { UpdateActionsAgentArgs };
