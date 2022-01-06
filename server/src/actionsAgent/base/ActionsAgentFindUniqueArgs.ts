import { ArgsType, Field } from "@nestjs/graphql";
import { ActionsAgentWhereUniqueInput } from "./ActionsAgentWhereUniqueInput";

@ArgsType()
class ActionsAgentFindUniqueArgs {
  @Field(() => ActionsAgentWhereUniqueInput, { nullable: false })
  where!: ActionsAgentWhereUniqueInput;
}

export { ActionsAgentFindUniqueArgs };
