import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job } from 'bull';

@Injectable()
@Processor('testing-log')
export class ContactBrokerageService {
  @Process()
  async processLog(job: Job<any>) {
    const logObject = job.data;
    console.log('Received log:', logObject);
  }
}
