import { Psychologist } from './psychologist';
import { User } from './user';

export class PatientCompuesto {
  constructor(
    public id: number,
    public first_name: String,
    public last_name: String,
    public gender: String,
    public age: number,
    public level_of_education: String,
    public birthplace: String,
    public phone: String,
    public email: String,
    public psychologist: Psychologist,
    public user: User
  ) {}
}
