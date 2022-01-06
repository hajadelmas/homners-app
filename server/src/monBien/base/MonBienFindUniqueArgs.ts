import { ArgsType, Field } from "@nestjs/graphql";
import { MonBienWhereUniqueInput } from "./MonBienWhereUniqueInput";

@ArgsType()
class MonBienFindUniqueArgs {
  @Field(() => MonBienWhereUniqueInput, { nullable: false })
  where!: MonBienWhereUniqueInput;
}

export { MonBienFindUniqueArgs };
