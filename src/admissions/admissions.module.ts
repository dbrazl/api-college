import { Module } from '@nestjs/common';
import { AdmissionsService } from './admissions.service';
import { AdmissionsController } from './admissions.controller';
import { ADMISSION_SERVICE_INTERFACE } from 'src/injection.interface.types';
import { PrismaService } from 'src/admissions/prisma.service';

@Module({
  providers: [
    {
      provide: ADMISSION_SERVICE_INTERFACE,
      useClass: AdmissionsService,
    },
    PrismaService,
  ],
  controllers: [AdmissionsController],
})
export class AdmissionsModule {}
