import { Controller, Get } from '@nestjs/common';
import { IAppController } from './app.controller.interface';

@Controller()
export class AppController implements IAppController {
  @Get('/health')
  health(): void {}
}
