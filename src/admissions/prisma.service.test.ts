import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
  let service: PrismaService;
  let connectSpy: jest.SpyInstance;
  let disconnectSpy: jest.SpyInstance;

  beforeEach(() => {
    service = new PrismaService();
    connectSpy = jest.spyOn(service, '$connect');
    disconnectSpy = jest.spyOn(service, '$disconnect');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call $connect on module init', async () => {
    await service.onModuleInit();
    expect(connectSpy).toHaveBeenCalled();
  });

  it('should throw an error if $connect fails', async () => {
    connectSpy.mockImplementationOnce(() => {
      throw new Error('Connection error');
    });

    await expect(service.onModuleInit()).rejects.toThrow('Connection error');
  });

  it('should call $disconnect on module destroy', async () => {
    await service.onModuleDestroy();
    expect(disconnectSpy).toHaveBeenCalled();
  });

  it('should throw an error if $disconnect fails', async () => {
    disconnectSpy.mockImplementationOnce(() => {
      throw new Error('Disconnection error');
    });

    await expect(service.onModuleDestroy()).rejects.toThrow(
      'Disconnection error',
    );
  });
});
