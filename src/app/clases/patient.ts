export class Patient {
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
    public psychologist_id: number,
    public user_id: number
  ) {}
}
