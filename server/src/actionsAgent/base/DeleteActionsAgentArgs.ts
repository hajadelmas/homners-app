import { ArgsType, Field } from "@nestjs/graphql";
import { ActionsAgentWhereUniqueInput } from "./ActionsAgentWhereUniqueInput";

@ArgsType()
class DeleteActionsAgentArgs {
  @Field(() => ActionsAgentWhereUniqueInput, { nullable: false })
  where!: ActionsAgentWhereUniqueInput;
}

export { DeleteActionsAgentArgs };
