import emailjs, { type EmailJSResponseStatus } from "@emailjs/browser";

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
      from_name: this.fields[0],
      company: this.fields[1],
      user_email: this.fields[2],
      phone: this.fields[3],
      message: this.fields[4],
    };
    try {
      await emailjs.send(serviceID, templateID, formData, userID);
    } catch (error) {
      const erHand: EmailJSResponseStatus = error as EmailJSResponseStatus;
      throw new Error(erHand.text ?? "Error");
    }
  }
}
