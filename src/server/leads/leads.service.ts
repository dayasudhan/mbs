import {
  Injectable
} from '@nestjs/common';
import {
  InjectModel
} from '@nestjs/mongoose';
import {
  Model
} from 'mongoose';
import {
  CreateLeadsDto
} from '../dto/create-leads.dto';
import {
  UpdateLeadsDto
} from '../dto/update-leads.dto';
import {
  Leads,
  LeadsDocument
} from '../schemas/leads.schema';

@Injectable()
export class LeadsService {

  constructor(@InjectModel(Leads.name) private readonly leadsModel: Model < LeadsDocument > ) {}

  async create(createleadsDto: CreateLeadsDto): Promise < LeadsDocument > {
    const leads = new this.leadsModel(createleadsDto);
    return leads.save();
  }

  async findAll(): Promise < LeadsDocument[] > {
    console.log("leads service findalll");
    return this.leadsModel.find()
      .exec();
  }

  async findOne(id: string) {
    return this.leadsModel.findById(id);
  }

  async update(id: string, updateleadsDto: UpdateLeadsDto): Promise < LeadsDocument > {
    return this.leadsModel.findByIdAndUpdate(id, updateleadsDto);
  }

  async remove(id: string) {
    return this.leadsModel.findByIdAndRemove(id);
  }
}