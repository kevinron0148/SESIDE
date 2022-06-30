export class Pregunta_base {
  constructor(
    public id: number, 
    public date: Date,
    public test_id: number,
    public pregunta_base_id: number,
    public rpta: String,
    public is_active: boolean
    ) {}
}
