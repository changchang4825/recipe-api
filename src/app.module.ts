import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientModule } from './ingredient/ingredient.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { InformationModule } from './information/information.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            isGlobal: true,
        }),
        MongooseModule.forRootAsync({
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGO_URL'),
            }),
            inject: [ConfigService],
        }),
        IngredientModule,
        InformationModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
