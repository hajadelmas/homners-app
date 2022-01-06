import { ArgsType, Field } from "@nestjs/graphql";
import { ContreRenduVisiteWhereUniqueInput } from "./ContreRenduVisiteWhereUniqueInput";
import { ContreRenduVisiteUpdateInput } from "./ContreRenduVisiteUpdateInput";

@ArgsType()
class UpdateContreRenduVisiteArgs {
  @Field(() => ContreRenduVisiteWhereUniqueInput, { nullable: false })
  where!: ContreRenduVisiteWhereUniqueInput;
  @Field(() => ContreRenduVisiteUpdateInput, { nullable: false })
  data!: ContreRenduVisiteUpdateInput;
}

export { UpdateContreRenduVisiteArgs };
