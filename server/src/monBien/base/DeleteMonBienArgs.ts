import { ArgsType, Field } from "@nestjs/graphql";
import { MonBienWhereUniqueInput } from "./MonBienWhereUniqueInput";

@ArgsType()
class DeleteMonBienArgs {
  @Field(() => MonBienWhereUniqueInput, { nullable: false })
  where!: MonBienWhereUniqueInput;
}

export { DeleteMonBienArgs };
