import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query
} from '@nestjs/common';
import {
  LeadsService
} from './leads.service';
import {
  CreateLeadsDto
} from '../dto/create-leads.dto';
import {
  UpdateLeadsDto
} from '../dto/update-leads.dto';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post('')
  create(@Body() createLeadsDto: CreateLeadsDto) {
    return this.leadsService.create(createLeadsDto);
  } 

  @Get('')
  findAll() {
    console.log("Leads findall")
    return this.leadsService.findAll();
  }
  @Get('/pdf')
  findAll2(@Query('id') id: string) {
    console.log("PDF Generation",id)
    
    return this.leadsService.generatePDF(id);
  }
  // @Get('/leads')
  // findOne(@Query('id') id: string) {
  //   console.log("id",id)
  //   return this.leadsService.findOne(id);
  // }
  @Get(':id')
  findOne2(@Param('id') id: string) {
    console.log("id",id)
    return this.leadsService.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateLeadsDto: UpdateLeadsDto) {
    return this.leadsService.update(id, updateLeadsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leadsService.remove(id);
  }


}