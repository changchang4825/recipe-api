import { Controller, Get, Param } from '@nestjs/common';
import { InformationService } from './information.service';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { ResponseInformationNameDto } from './dto/response/response-information-name.dto';

@Controller('informations')
export class InformationController {
    constructor(
        private readonly informationService: InformationService,
    ) { }

    @Get(':name')
    @Serialize(ResponseInformationNameDto)
    async getInformationNamesByName(
        @Param('name') name: string,
    ) {
        return await this.informationService.getInformationsByName(name);
    }
}
