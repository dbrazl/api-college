import { Test, TestingModule } from '@nestjs/testing';
import { AdmissionsController } from './admissions.controller';
import { IAdmissionsService } from './interfaces/admission.service.interface';
import { Admission } from './@types/Admission';
import { ADMISSION_SERVICE_INTERFACE } from 'src/injection.interface.types';

describe('AdmissionsController', () => {
  let controller: AdmissionsController;
  let admissionService: jest.Mocked<IAdmissionsService>;

  const admissions: Admission[] = [
    {
      uuid: '4536fed6-08ff-41ad-9c84-34ae3d0c2200',
      name: 'Alice',
      email: 'alice@example.com',
      score: 39,
      admitted: false,
    },
    {
      uuid: 'fac3fd1a-a641-49d1-8bc9-62f85e5afe4d',
      name: 'Bob',
      email: 'bob@example.com',
      score: 82,
      admitted: true,
    },
    {
      uuid: '62d2403c-a50f-46c7-903a-42a9104b815a',
      name: 'Charlie',
      email: 'charlie@example.com',
      score: 11,
      admitted: false,
    },
  ];

  beforeEach(async () => {
    admissionService = jest.mocked({
      index: jest.fn().mockResolvedValue(admissions),
    });

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdmissionsController],
      providers: [
        {
          provide: ADMISSION_SERVICE_INTERFACE,
          useValue: admissionService,
        },
      ],
    }).compile();

    controller = module.get<AdmissionsController>(AdmissionsController);
  });

  it('should call index from admission service', async () => {
    const admissions: Admission[] = await controller.index();
    expect(admissionService.index).toHaveBeenCalled();
    expect(admissions).toEqual(admissions);
  });
});
