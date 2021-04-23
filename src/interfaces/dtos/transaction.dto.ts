import { Field, InputType, Int } from "type-graphql";
import { TransactionRo } from "../ros/transaction.ro";

export type createTransactionDto = Partial<TransactionRo>;

@InputType()
export class similarUsersDto {
  @Field(() => Int)
  userId: number;

  @Field(() => [String])
  trends: string[];
}
