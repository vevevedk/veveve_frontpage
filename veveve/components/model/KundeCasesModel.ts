export class KundeCasesData {
  id: number;
  title: string;
  img: string;
  line1: string;
  line2?: string;
  line3?: string;
  line4?: string;

  constructor(
    id: number,
    title: string,
    img: string,
    line1: string,
    line2: string,
    line3: string,
    line4: string
  ) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.line4 = line4;
  }
}
