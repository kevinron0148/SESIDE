export class User {
  constructor(
    public id: number,
    public username: String,
    public password: String,
    public is_active: boolean,
    public role_id: number
  ) {}
}
