import { Inject, Injectable } from '@nestjs/common';
import { IAdmissionsService } from './interfaces/admission.service.interface';
import { Admission } from './@types/Admission';
import { PrismaService } from 'src/admissions/prisma.service';
import { Student } from './@types/Student';

@Injectable()
export class AdmissionsService implements IAdmissionsService {
  @Inject()
  private readonly prismaService: PrismaService;

  public async index(): Promise<Admission[]> {
    const students = await this.prismaService.students.findMany();
    return this.mapToAdmissions(students);
  }

  private mapToAdmissions(students: Student[]): Admission[] {
    return students.map((student: Student) => ({
      uuid: student.uuid,
      name: student.name,
      email: student.email,
      score: student.score,
      admitted: true,
    }));
  }
}
