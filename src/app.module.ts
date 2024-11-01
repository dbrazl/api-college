import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AdmissionsModule } from './admissions/admissions.module';

@Module({
  imports: [AdmissionsModule],
  controllers: [AppController],
})
export class AppModule {}
