// src/interceptors/logging.interceptor.ts

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(@InjectQueue('testing-log') private queue: Queue) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const startTime = Date.now();
    const request = context.switchToHttp().getRequest();

    const requestId = uuidv4();

    return next.handle().pipe(
      tap((responseData) => {
        const endTime = Date.now();
        const responseTime = endTime - startTime;

        const logObject = {
          requestId,
          requestStatus: 'Success',
          requestBody: request.body,
          responseData,
          responseTime,
        };

        this.queue.add(logObject);
      }),
    );
  }
}
