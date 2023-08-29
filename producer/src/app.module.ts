import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logging.interceptor';
import { LoggingMiddleware } from './log.middleware';
import { RabbitMQModule } from './RabbitMQ/RabbitMq.module';

@Module({
  imports: [RabbitMQModule],
  controllers: [AppController],
  providers: [
    AppService,
    // LoggingMiddleware,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
