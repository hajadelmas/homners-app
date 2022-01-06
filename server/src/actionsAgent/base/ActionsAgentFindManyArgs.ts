import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ActionsAgentWhereInput } from "./ActionsAgentWhereInput";
import { Type } from "class-transformer";
import { ActionsAgentOrderByInput } from "./ActionsAgentOrderByInput";

@ArgsType()
class ActionsAgentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ActionsAgentWhereInput,
  })
  @Field(() => ActionsAgentWhereInput, { nullable: true })
  @Type(() => ActionsAgentWhereInput)
  where?: ActionsAgentWhereInput;

  @ApiProperty({
    required: false,
    type: ActionsAgentOrderByInput,
  })
  @Field(() => ActionsAgentOrderByInput, { nullable: true })
  @Type(() => ActionsAgentOrderByInput)
  orderBy?: ActionsAgentOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ActionsAgentFindManyArgs };
