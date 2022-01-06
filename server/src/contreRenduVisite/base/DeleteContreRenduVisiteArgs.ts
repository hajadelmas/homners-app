import { ArgsType, Field } from "@nestjs/graphql";
import { ContreRenduVisiteWhereUniqueInput } from "./ContreRenduVisiteWhereUniqueInput";

@ArgsType()
class DeleteContreRenduVisiteArgs {
  @Field(() => ContreRenduVisiteWhereUniqueInput, { nullable: false })
  where!: ContreRenduVisiteWhereUniqueInput;
}

export { DeleteContreRenduVisiteArgs };
