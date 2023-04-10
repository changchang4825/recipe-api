import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { Observable, map } from "rxjs";

export function Serialize(dto: any) {
	return UseInterceptors(new SerializeInterceptor(dto));
}

class SerializeInterceptor implements NestInterceptor {
    constructor(private readonly dto: any) { }

    intercept(
        context: ExecutionContext,
        next: CallHandler
    ): Observable<any> {
        return next
            .handle()
            .pipe(
                map(data => {
                    return plainToInstance(this.dto, data, {
                        excludeExtraneousValues: true,
                    });
                })
            );
    }
}