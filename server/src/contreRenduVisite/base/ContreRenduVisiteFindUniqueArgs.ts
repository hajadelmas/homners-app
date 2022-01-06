import { ArgsType, Field } from "@nestjs/graphql";
import { ContreRenduVisiteWhereUniqueInput } from "./ContreRenduVisiteWhereUniqueInput";

@ArgsType()
class ContreRenduVisiteFindUniqueArgs {
  @Field(() => ContreRenduVisiteWhereUniqueInput, { nullable: false })
  where!: ContreRenduVisiteWhereUniqueInput;
}

export { ContreRenduVisiteFindUniqueArgs };
