import { Admission } from '../@types/Admission';

export interface IAdmissionsController {
  index(): Promise<Admission[]>;
}
