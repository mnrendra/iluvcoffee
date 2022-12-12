import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of a coffee.' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'The description of a coffee.' })
  @IsString()
  @IsOptional()
  readonly description: string | null;

  @ApiProperty({ description: 'The brand of a coffee.' })
  @IsString()
  readonly brand: string;

  @ApiProperty({ description: 'The recommendations of a coffee.' })
  @IsNumber()
  @IsOptional()
  readonly recommendations: number;

  @ApiProperty({ description: 'The flavors of a coffee.', example: [] })
  @IsString({ each: true })
  readonly flavors: string[];
}
