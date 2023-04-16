import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Information } from './information.schema';
import { Model } from 'mongoose';

@Injectable()
export class InformationRepository {
    constructor(
        @InjectModel(Information.name) private readonly informationModel: Model<Information>
    ) { }

    async getInformationsByRecipeCodes(recipeCodes: number[]) {
        return await this.informationModel
            .find({ recipeCode: recipeCodes })
            .lean()
            .exec();
    }
}
