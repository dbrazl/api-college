import { Controller, Get, Inject } from '@nestjs/common';
import { IAdmissionsController } from './interfaces/admission.controller.interface';
import { Admission } from './@types/Admission';
import { IAdmissionsService } from './interfaces/admission.service.interface';
import { ADMISSION_SERVICE_INTERFACE } from 'src/injection.interface.types';

@Controller()
export class AdmissionsController implements IAdmissionsController {
  @Inject(ADMISSION_SERVICE_INTERFACE)
  private readonly admissionsService: IAdmissionsService;

  @Get('/students/admissions')
  public async index(): Promise<Admission[]> {
    return await this.admissionsService.index();
  }
}
