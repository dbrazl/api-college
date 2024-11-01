import { Inject, Injectable } from '@nestjs/common';
import { IAdmissionsService } from './interfaces/admission.service.interface';
import { Admission } from './@types/Admission';
import { Student as StudentType } from './@types/Student';
import { PrismaService } from 'src/admissions/prisma.service';
import { Student } from '../business/student.entity';

@Injectable()
export class AdmissionsService implements IAdmissionsService {
  @Inject()
  private readonly prismaService: PrismaService;

  public async index(): Promise<Admission[]> {
    const studentsPersisted: StudentType[] =
      await this.prismaService.students.findMany();
    const students: Student[] = this.mapStudents(studentsPersisted);
    return this.mapToAdmissions(students);
  }

  private mapStudents(students: StudentType[]): Student[] {
    return students.map(
      ({ id, uuid, name, email, score }: StudentType) =>
        new Student(id, uuid, name, email, score),
    );
  }

  private mapToAdmissions(students: Student[]): Admission[] {
    return students.map((student: Student) => ({
      uuid: student.uuid,
      name: student.name,
      email: student.email,
      score: student.score,
      admitted: student.isAdmitted(),
    }));
  }
}
