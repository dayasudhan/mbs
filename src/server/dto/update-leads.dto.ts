import {
  PartialType
} from '@nestjs/mapped-types';
import {
  CreateLeadsDto
} from './create-leads.dto';

export class UpdateLeadsDto extends PartialType(CreateLeadsDto) {}