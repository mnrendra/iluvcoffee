import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description: string | null;

  @IsString()
  readonly brand: string;

  @IsNumber()
  @IsOptional()
  readonly recommendations: number;

  @IsString({ each: true })
  readonly flavors: string[];
}
