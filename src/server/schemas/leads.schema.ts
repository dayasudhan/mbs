import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LeadsDocument = Leads & Document;

@Schema()
export class Leads {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;
}

export const LeadsSchema = SchemaFactory.createForClass(Leads);
