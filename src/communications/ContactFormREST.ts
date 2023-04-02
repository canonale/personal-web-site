import emailjs from "@emailjs/browser";

export interface ContactFormREST {
  fields: string[];
  send(): Promise<void | Error>;
}

export class ContactFormEmailJS implements ContactFormREST {
  fields: string[];

  constructor(fields: string[]) {
    this.fields = fields;
  }
  async send(): Promise<void | Error> {
    const userID = import.meta.env.VITE_USER_ID;
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const formData: Record<string, string> = {
      name: this.fields[0],
      company: this.fields[1],
      email: this.fields[2],
      phone: this.fields[3],
      comments: this.fields[4],
    };
    try {
      await emailjs.send(serviceID, templateID, formData, userID);
    } catch (error) {
      throw new Error(error.text ?? "Error");
    }
  }
}
