import { Controller, Get } from '@nestjs/common';
import { IAppController } from './IAppController';

@Controller()
export class AppController implements IAppController {
  @Get('/health')
  health(): void {}
}
