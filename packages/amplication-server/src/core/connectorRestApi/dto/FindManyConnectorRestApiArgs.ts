import { ArgsType, Field, Int } from '@nestjs/graphql';
import { ConnectorRestApiOrderByInput, ConnectorRestApiWhereInput } from './';

@ArgsType()
export class FindManyConnectorRestApiArgs {
  @Field(() => ConnectorRestApiWhereInput, { nullable: true })
  where?: ConnectorRestApiWhereInput | null;

  @Field(() => ConnectorRestApiOrderByInput, { nullable: true })
  orderBy?: ConnectorRestApiOrderByInput | null;

  @Field(() => Int, { nullable: true })
  skip?: number | null;

  // @Field(() => BlockWhereUniqueInput, { nullable: true })
  // after?: BlockWhereUniqueInput | null;

  // @Field(() => BlockWhereUniqueInput, { nullable: true })
  // before?: BlockWhereUniqueInput | null;

  @Field(() => Int, { nullable: true })
  first?: number | null;

  @Field(() => Int, { nullable: true })
  last?: number | null;
}
