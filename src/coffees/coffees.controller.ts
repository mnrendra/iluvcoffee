import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  // UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Protocol } from 'src/common/decorators/protocol.decorator';
// import { request } from 'http';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { Public } from '../common/decorators/public.decorator';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

// @UsePipes(ValidationPipe) // Controller-scoped
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {
    console.log('CoffeesController created');
  }

  // @UsePipes(ValidationPipe) // Method-scoped
  @Public()
  @Get()
  async findAll(@Protocol('https') protocol: string, @Query() paginationQuery: any) {
    console.log('CoffeesController findAll', protocol);
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return this.coffeesService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log('findOne', id);
    return this.coffeesService.findOne('' + id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateCoffeeDto) {
    console.log(body instanceof CreateCoffeeDto);
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body(ValidationPipe) body: UpdateCoffeeDto) {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
