import emailjs from "@emailjs/browser";

export interface ContactFormREST {
  fields: string[];
  send(): void;
}

export class ContactFormEmailJS implements ContactFormREST {
  fields: string[];

  constructor(fields: string[]) {
    this.fields = fields;
  }
  send(): void {
    throw new Error("Method not implemented.");
  }
}
