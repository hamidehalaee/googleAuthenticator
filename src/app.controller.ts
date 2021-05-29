import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getQRcode(): any {
    return this.appService.getQRcode();
  }

  // @Get()
  // verify(): any {
  //   return this.appService.verify();
  // }
}
