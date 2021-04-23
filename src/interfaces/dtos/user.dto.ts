import { Field, InputType } from "type-graphql";

@InputType()
export class rawSimilarUsersDto {
  @Field()
  userId: string;
}
