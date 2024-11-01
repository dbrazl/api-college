import { Student } from './student.entity';

describe('Student', () => {
  let student: Student;

  const id: number = 1;
  const uuid: string = '3308334c-7cd5-449e-818b-03f689b915d3';
  const name: string = 'Daniel';
  const email: string = 'daniel.braz@vyox.io';
  const score: number = 96;

  beforeEach(() => {
    student = new Student(id, uuid, name, email, score);
  });

  it('should be defined', () => {
    expect(student).toBeDefined();
  });

  it('should get id', () => {
    expect(student.id).toBe(id);
  });

  it('should set new id', () => {
    const newId: number = 2;
    student.id = newId;
    expect(student.id).toBe(newId);
  });

  it('should get uuid', () => {
    expect(student.uuid).toBe(uuid);
  });

  it('should set new uuid', () => {
    const newUuid: string = 'ec3e73d2-0c87-4fed-bc2f-73ccc476cf2e';
    student.uuid = newUuid;
    expect(student.uuid).toBe(newUuid);
  });

  it('should get name', () => {
    expect(student.name).toBe(name);
  });

  it('should set new name', () => {
    const newName: string = 'Thiago';
    student.name = newName;
    expect(student.name).toBe(newName);
  });

  it('should get email', () => {
    expect(student.email).toBe(email);
  });

  it('should set new email', () => {
    const newEmail: string = 'daniel@vyox.io';
    student.email = newEmail;
    expect(student.email).toBe(newEmail);
  });

  it('should get score', () => {
    expect(student.score).toBe(score);
  });

  it('should set new score', () => {
    const newScore: number = 85;
    student.score = newScore;
    expect(student.score).toBe(newScore);
  });

  it('should return false when score is less than 70', () => {
    student.score = 35;
    expect(student.isAdmitted()).toBe(false);
  });

  it('should return true when score is equal 70', () => {
    student.score = 70;
    expect(student.isAdmitted()).toBe(true);
  });

  it('should return true when score is more than 70', () => {
    expect(student.isAdmitted()).toBe(true);
  });
});
