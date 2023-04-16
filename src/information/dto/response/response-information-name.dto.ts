import { PickType } from "@nestjs/mapped-types";
import { ResponseInformationDto } from "./response-information.dto";

export class ResponseInformationNameDto extends PickType(ResponseInformationDto, ['_id', 'name'] as const) { }