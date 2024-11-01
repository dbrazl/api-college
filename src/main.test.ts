import { bootstrap } from './main';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

describe('Main', () => {
  let listenMock: jest.Mock;

  jest.mock('@nestjs/core', () => ({
    listen: jest.fn(),
    enableCors: jest.fn(),
    enableVersioning: jest.fn(),
    getUrl: jest.fn(),
    setGlobalPrefix: jest.fn(),
    useWebSocketAdapter: jest.fn(),
    connectMicroservice: jest.fn(),
    getMicroservices: jest.fn(),
    getHttpServer: jest.fn(),
    getHttpAdapter: jest.fn(),
    startAllMicroservices: jest.fn(),
    useGlobalFilters: jest.fn(),
    useGlobalPipes: jest.fn(),
    useGlobalInterceptors: jest.fn(),
    useGlobalGuards: jest.fn(),
    close: jest.fn(),
    use: undefined,
    select: undefined,
    get: undefined,
    resolve: undefined,
    registerRequestByContextId: undefined,
    useLogger: undefined,
    flushLogs: undefined,
    enableShutdownHooks: undefined,
    init: undefined,
  }));

  beforeEach(() => {
    listenMock = jest.fn();
    jest.spyOn(NestFactory, 'create').mockResolvedValue({
      listen: listenMock,
    } as any);
  });

  it('should start app on port 4000', async () => {
    process.env.PORT = '4000';
    await bootstrap();
    expect(NestFactory.create).toHaveBeenCalledWith(AppModule);
    expect(listenMock).toHaveBeenCalledWith('4000');
  });

  it('should start app on port 3000 if do not have port env var', async () => {
    delete process.env.PORT;
    await bootstrap();
    expect(NestFactory.create).toHaveBeenCalledWith(AppModule);
    expect(listenMock).toHaveBeenCalledWith(3000);
  });
});
