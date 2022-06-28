import { Patient } from "./patient";
import { Psychologist } from "./psychologist";

export class Test {
  constructor(
    public id: number,
    public date: String,
    public observation: String,
    public is_active: boolean,
    public patient_id: number,
    public patient: Patient,
    public psychologist_id: number,
    public psychologist: Psychologist
  ) {}
}
