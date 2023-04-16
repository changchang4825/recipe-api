import { Controller, Get, Param } from '@nestjs/common';
import { InformationService } from './information.service';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { ResponseInformationNameDto } from './dto/response/response-information-name.dto';
import { ResponseInformationDto } from './dto/response/response-information.dto';

@Controller()
export class InformationController {
    constructor(
        private readonly informationService: InformationService,
    ) { }

    @Get('ingredients/:name/informations')
    @Serialize(ResponseInformationNameDto)
    async getInformationNamesByName(
        @Param('name') name: string,
    ) {
        return await this.informationService.getInformationsByName(name);
    }

    @Get('informations/:name')
    @Serialize(ResponseInformationDto)
    async getInformation(
        @Param('name') name: string,
    ) {
        return await this.informationService.getInformation(name);
    }
}
