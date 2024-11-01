import { AppModule } from './app.module';

describe('AppModule', () => {
  let module: AppModule;

  beforeEach(() => {
    module = new AppModule();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});
