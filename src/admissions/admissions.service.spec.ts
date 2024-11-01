import { Test, TestingModule } from '@nestjs/testing';
import { AdmissionsService } from './admissions.service';

describe('AdmissionsService', () => {
  let service: AdmissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdmissionsService],
    }).compile();

    service = module.get<AdmissionsService>(AdmissionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
