import { ArgsType, Field } from "@nestjs/graphql";
import { ContreRenduVisiteCreateInput } from "./ContreRenduVisiteCreateInput";

@ArgsType()
class CreateContreRenduVisiteArgs {
  @Field(() => ContreRenduVisiteCreateInput, { nullable: false })
  data!: ContreRenduVisiteCreateInput;
}

export { CreateContreRenduVisiteArgs };
