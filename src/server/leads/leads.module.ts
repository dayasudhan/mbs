import {
  Module
} from '@nestjs/common';
import {
  LeadsService
} from './leads.service';
import {
  LeadsController
} from './leads.controller';
import {
  Leads,
  LeadsSchema
} from '../schemas/leads.schema';
import {
  MongooseModule
} from '@nestjs/mongoose';
import { PdfService } from './pdf.service';

@Module({
  imports: [
   MongooseModule.forFeature([
      {
        name: Leads.name,
        schema: LeadsSchema
      },
   ])
  ],
  controllers: [LeadsController],
  providers: [LeadsService,PdfService]
})
export class LeadsModule {}