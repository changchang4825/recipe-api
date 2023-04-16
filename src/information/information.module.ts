import { Module } from '@nestjs/common';
import { InformationController } from './information.controller';
import { InformationService } from './information.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Information, InformationSchema } from './information.schema';
import { InformationRepository } from './information.repository';
import { IngredientModule } from 'src/ingredient/ingredient.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Information.name, schema: InformationSchema }
        ]),
        IngredientModule
    ],
    controllers: [InformationController],
    providers: [InformationService, InformationRepository]
})
export class InformationModule { }
