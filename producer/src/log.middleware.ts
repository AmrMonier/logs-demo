import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response } from 'express';
import { RabbitMQService } from './RabbitMQ/RabbitMQ.service';
import { v4 } from 'uuid';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  /**
   *
   */
  constructor(private t: RabbitMQService) {}
  use(req: any, res: any, next: () => void) {
    req.id = v4();
    req.startTime = Date.now();
    next();
  }
}
