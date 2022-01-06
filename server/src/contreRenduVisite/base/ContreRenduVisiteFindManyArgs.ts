import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContreRenduVisiteWhereInput } from "./ContreRenduVisiteWhereInput";
import { Type } from "class-transformer";
import { ContreRenduVisiteOrderByInput } from "./ContreRenduVisiteOrderByInput";

@ArgsType()
class ContreRenduVisiteFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ContreRenduVisiteWhereInput,
  })
  @Field(() => ContreRenduVisiteWhereInput, { nullable: true })
  @Type(() => ContreRenduVisiteWhereInput)
  where?: ContreRenduVisiteWhereInput;

  @ApiProperty({
    required: false,
    type: ContreRenduVisiteOrderByInput,
  })
  @Field(() => ContreRenduVisiteOrderByInput, { nullable: true })
  @Type(() => ContreRenduVisiteOrderByInput)
  orderBy?: ContreRenduVisiteOrderByInput;

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

export { ContreRenduVisiteFindManyArgs };
