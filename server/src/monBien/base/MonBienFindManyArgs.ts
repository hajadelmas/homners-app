import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MonBienWhereInput } from "./MonBienWhereInput";
import { Type } from "class-transformer";
import { MonBienOrderByInput } from "./MonBienOrderByInput";

@ArgsType()
class MonBienFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MonBienWhereInput,
  })
  @Field(() => MonBienWhereInput, { nullable: true })
  @Type(() => MonBienWhereInput)
  where?: MonBienWhereInput;

  @ApiProperty({
    required: false,
    type: MonBienOrderByInput,
  })
  @Field(() => MonBienOrderByInput, { nullable: true })
  @Type(() => MonBienOrderByInput)
  orderBy?: MonBienOrderByInput;

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

export { MonBienFindManyArgs };
