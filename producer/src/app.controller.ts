import { Controller, Get, Header, Post, Res, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getHello() {
    const obj: { [key: string]: string } = {};
    const numProps = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < numProps; i++) {
      const prop = Math.random().toString(36).substring(7);
      const val = Math.random().toString(36).substring(7);
      obj[prop] = val;
    }
    return obj;
  }

  @Post()
  @Get()
  @Header('Content-Type', 'application/json')
  postHello() {
    const obj: { [key: string]: string } = {};
    const numProps = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < numProps; i++) {
      const prop = Math.random().toString(36).substring(7);
      const val = Math.random().toString(36).substring(7);
      obj[prop] = val;
    }
    // return ''
    return obj;
  }
}
