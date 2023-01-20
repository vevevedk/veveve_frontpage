export class CardData {
  id: number;
  title: string;
  description: string;
  extra?: string;
  Url?: string;
  constructor(
    id: number,
    title: string,
    description: string,
    extra?: string,
    Url?: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.extra = extra;
    this.Url = Url;
  }
}
