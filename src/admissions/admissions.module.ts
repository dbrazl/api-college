import { Module } from '@nestjs/common';
import { AdmissionsService } from './admissions.service';
import { AdmissionsController } from './admissions.controller';
import { ADMISSION_SERVICE_INTERFACE } from 'src/injection.interface.types';
import { PrismaService } from 'src/admissions/prisma.service';
import { Student } from 'src/business/student.entity';

@Module({
  providers: [
    {
      provide: ADMISSION_SERVICE_INTERFACE,
      useClass: AdmissionsService,
    },
    PrismaService,
    Student,
  ],
  controllers: [AdmissionsController],
})
export class AdmissionsModule {}
