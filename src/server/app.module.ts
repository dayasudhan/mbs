import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViewModule } from './modules/view/view.module';
import { CommonModule } from './common/common.module';
import { BuyerModule } from './buyer/buyer.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LeadsModule } from './leads/leads.module';
const MONGOURI ='mongodb+srv://heroku_z21t18n4:sudhan@cluster-z21t18n4.g35xm.mongodb.net/heroku_z21t18n4?retryWrites=true&w=majority'
const MONGOURI2 ='mongodb+srv://heroku_mhgndgwl:sudhan@cluster0.3b3lz.mongodb.net/?retryWrites=true&w=majority'  
const MONGOURI3 ='mongodb+srv://dayasudhankg:sudhan@cluster0.fkayncs.mongodb.net/?retryWrites=true&w=majority'
const MONGOURI4 ='mongodb://127.0.0.1:27017/farm';
@Module({
  imports: [
    CommonModule,
    LeadsModule,
    BuyerModule,
    ViewModule,
    MongooseModule.forRoot(MONGOURI4),
    
    //"mongodb+srv://heroku_mhgndgwl:sudhan@cluster0.3b3lz.mongodb.net/?retryWrites=true&w=majority";
  ],
  controllers: [],
  providers: [],
  // controllers: [AppController],
  // providers: [AppService],
})
//9449686314
export class AppModule {}
