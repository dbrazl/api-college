import { Admission } from '../@types/Admission';

export interface IAdmissionsService {
  index(): Promise<Admission[]>;
}
