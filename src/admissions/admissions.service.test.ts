import { Test, TestingModule } from '@nestjs/testing';
import { IAdmissionsService } from './interfaces/admission.service.interface';
import { PrismaService } from './prisma.service';
import { AdmissionsService } from './admissions.service';
import { Admission } from './@types/Admission';
import { Student } from './@types/Student';

describe('AdmissionsService', () => {
  let service: IAdmissionsService;
  let prismaService: jest.Mocked<PrismaService>;

  const students: Student[] = [
    {
      id: 1,
      uuid: 'a1b2c3d4-e5f6-7890-1234-56789abcdef0',
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      score: 85,
    },
    {
      id: 2,
      uuid: 'b2c3d4e5-f6a7-8901-2345-6789abcdef12',
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      score: 69,
    },
    {
      id: 3,
      uuid: 'c3d4e5f6-a7b8-9012-3456-789abcdef123',
      name: 'Carol Williams',
      email: 'carol.williams@example.com',
      score: 78,
    },
    {
      id: 4,
      uuid: 'd4e5f6a7-b8c9-0123-4567-89abcdef1234',
      name: 'David Brown',
      email: 'david.brown@example.com',
      score: 43,
    },
    {
      id: 5,
      uuid: 'e5f6a7b8-c9d0-1234-5678-9abcdef12345',
      name: 'Eve Davis',
      email: 'eve.davis@example.com',
      score: 95,
    },
  ];

  beforeEach(async () => {
    prismaService = jest.mocked({
      students: {
        findMany: jest.fn().mockResolvedValue(students),
        findUnique: jest.fn(),
        findUniqueOrThrow: jest.fn(),
        findFirst: jest.fn(),
        findFirstOrThrow: jest.fn(),
        create: jest.fn(),
        createMany: jest.fn(),
        createManyAndReturn: jest.fn(),
        delete: jest.fn(),
        update: jest.fn(),
        deleteMany: jest.fn(),
        updateMany: jest.fn(),
        upsert: jest.fn(),
        count: jest.fn(),
        aggregate: jest.fn(),
        groupBy: jest.fn(),
        fields: undefined,
      },
      onModuleInit: undefined,
      onModuleDestroy: undefined,
      $on: undefined,
      $connect: undefined,
      $disconnect: undefined,
      $use: undefined,
      $executeRaw: undefined,
      $executeRawUnsafe: undefined,
      $queryRaw: undefined,
      $queryRawUnsafe: undefined,
      $transaction: undefined,
      $extends: undefined,
    });

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdmissionsService,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    service = module.get<AdmissionsService>(AdmissionsService);
  });

  it('should return admissions', async () => {
    const admissions: Admission[] = [
      {
        uuid: 'a1b2c3d4-e5f6-7890-1234-56789abcdef0',
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        score: 85,
        admitted: true,
      },
      {
        uuid: 'b2c3d4e5-f6a7-8901-2345-6789abcdef12',
        name: 'Bob Smith',
        email: 'bob.smith@example.com',
        score: 69,
        admitted: false,
      },
      {
        uuid: 'c3d4e5f6-a7b8-9012-3456-789abcdef123',
        name: 'Carol Williams',
        email: 'carol.williams@example.com',
        score: 78,
        admitted: true,
      },
      {
        uuid: 'd4e5f6a7-b8c9-0123-4567-89abcdef1234',
        name: 'David Brown',
        email: 'david.brown@example.com',
        score: 43,
        admitted: false,
      },
      {
        uuid: 'e5f6a7b8-c9d0-1234-5678-9abcdef12345',
        name: 'Eve Davis',
        email: 'eve.davis@example.com',
        score: 95,
        admitted: true,
      },
    ];
    const result: Admission[] = await service.index();
    expect(prismaService.students.findMany).toHaveBeenCalled();
    expect(result).toEqual(admissions);
  });
});
