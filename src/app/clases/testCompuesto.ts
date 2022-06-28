import { Patient } from './patient';
import { Psychologist } from './psychologist';

export class TestCompuesto {
  constructor(
    public id: number,
    public date: String,
    public observation: String,
    public is_active: boolean,
    public patient: Patient,
    public psychologist: Psychologist
  ) {}
}
