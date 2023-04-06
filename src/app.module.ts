import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientModule } from './ingredient/ingredient.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/test'),
        IngredientModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
