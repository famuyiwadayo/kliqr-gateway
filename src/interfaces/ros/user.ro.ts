import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
export class UserRo {
  @Field(() => Int)
  id: number;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  avatar: string;

  @Field()
  created_at: string;
}

@ObjectType()
export class UserTxCountRo {
  @Field()
  count: number;
}

@ObjectType()
export class UserWithTxCountRo extends UserRo {
  @Field(() => Int)
  total_transactions: number;
}
