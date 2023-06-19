import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put
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

@Controller('')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post('/api')
  create(@Body() createLeadsDto: CreateLeadsDto) {
    return this.leadsService.create(createLeadsDto);
  }

  @Get('/api')
  findAll() {
    console.log("Leads findall")
    return this.leadsService.findAll();
  }
  @Get('/pdf')
  findAll2() {
    console.log("PDF Generation")
    return this.leadsService.generatePDF();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
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