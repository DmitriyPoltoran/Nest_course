// export class CreatePostDto {
//     readonly title: string;
//     readonly content: string;
//     readonly userId: number;
// }
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'My breakfast', description: 'some title' })
  readonly title: string;

  @ApiProperty({ example: 'I ate yummy pancake', description: 'some content' })
  readonly content: string;

  @ApiProperty({ example: '1', description: 'user ID' })
  readonly userId: number
}
