import {
  ObjectType,
  Field,
  Int,
  Float,
  GraphQLISODateTime,
} from "type-graphql";

@ObjectType()
export class TransactionRo {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  user_id: number;

  @Field(() => Float)
  amount: number;

  @Field()
  type: string;

  @Field()
  category: string;

  @Field()
  icon_url: string;

  @Field(() => GraphQLISODateTime)
  date_time: Date | number | string;
}
