import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IAppController } from './IAppController';

@Controller()
export class AppController implements IAppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  health(): void {}
}
