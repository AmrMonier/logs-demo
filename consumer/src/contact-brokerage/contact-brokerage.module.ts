import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'testing-log',
    }),
  ],
  controllers: [],
  providers: [],
})
export class ContactBrokerageModule {}
