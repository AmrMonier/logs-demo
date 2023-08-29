import { Controller } from '@nestjs/common';
import {
  MessagePattern,
  RmqContext,
  Ctx,
  Payload,
} from '@nestjs/microservices';
import { ContactBrokerageService } from './contact-brokerage.service';
import { ILogInterface } from 'src/interfaces/ILog.interface';
@Controller()
export class AppController {
  constructor(
    private readonly contactBrokerageService: ContactBrokerageService,
  ) {}
  @MessagePattern('contact-brokerage')
  public async execute(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const msg = context.getMessage();
    await this.contactBrokerageService.storeLogs(msg as ILogInterface);
    channel.ack(msg);
  }
}
