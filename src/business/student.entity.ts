import { IStudent } from './student.entity.interface';

export class Student implements IStudent {
  private _id: number;
  private _uuid: string;
  private _name: string;
  private _email: string;
  private _score: number;

  constructor(
    id: number,
    uuid: string,
    name: string,
    email: string,
    score: number,
  ) {
    this._id = id;
    this._uuid = uuid;
    this._name = name;
    this._email = email;
    this._score = score;
  }

  public isAdmitted(): boolean {
    return this._score >= 70;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get uuid(): string {
    return this._uuid;
  }

  public set uuid(uuid: string) {
    this._uuid = uuid;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get score(): number {
    return this._score;
  }

  public set score(score: number) {
    this._score = score;
  }
}
