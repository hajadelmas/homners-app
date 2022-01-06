import { ArgsType, Field } from "@nestjs/graphql";
import { MonBienWhereUniqueInput } from "./MonBienWhereUniqueInput";
import { MonBienUpdateInput } from "./MonBienUpdateInput";

@ArgsType()
class UpdateMonBienArgs {
  @Field(() => MonBienWhereUniqueInput, { nullable: false })
  where!: MonBienWhereUniqueInput;
  @Field(() => MonBienUpdateInput, { nullable: false })
  data!: MonBienUpdateInput;
}

export { UpdateMonBienArgs };
