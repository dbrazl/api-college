import { AdmissionsModule } from './admissions.module';

describe('AdmissionsModule', () => {
  it('should be defined', () => {
    const module: AdmissionsModule = new AdmissionsModule();
    expect(module).toBeDefined();
  });
});
