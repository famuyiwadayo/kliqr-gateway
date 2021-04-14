import { ObjectType, Field, Int, Float } from "type-graphql";
import { UserRo } from "./user.ro";

@ObjectType()
export class TransactionRo {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field(() => Int, { nullable: true })
  user_id: number;

  @Field(() => Float, { nullable: true })
  amount: number;

  @Field({ nullable: true })
  type: string;

  @Field({ nullable: true })
  category: string;

  @Field({ nullable: true })
  icon_url: string;

  @Field({ nullable: true })
  date_time: string;
}

@ObjectType()
export class TransactionWithUserRo extends TransactionRo {
  @Field(() => UserRo, { nullable: true })
  user: UserRo;
}

@ObjectType()
export class TransactionSpentIncomeAndTotalRo {
  @Field(() => Float)
  spent: number;

  @Field(() => Float)
  income: number;

  @Field(() => Int)
  total: number;
}
