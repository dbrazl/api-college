import { AppController } from './app.controller';

describe('AppController', () => {
  let controller: AppController;
  let healthSpy: jest.SpyInstance;

  beforeEach(() => {
    controller = new AppController();
    healthSpy = jest.spyOn(controller, 'health');
  });

  it('should call health', () => {
    controller.health();
    expect(healthSpy).toHaveBeenCalled();
  });
});
