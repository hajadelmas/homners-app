import { ArgsType, Field } from "@nestjs/graphql";
import { MonBienCreateInput } from "./MonBienCreateInput";

@ArgsType()
class CreateMonBienArgs {
  @Field(() => MonBienCreateInput, { nullable: false })
  data!: MonBienCreateInput;
}

export { CreateMonBienArgs };
