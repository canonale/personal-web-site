import { ContactFormEmailJS } from "@/communications/ContactFormREST";
import { reactive } from "vue";
import type { FormField, InputFormField } from "./contactForm.d";

export const isFieldOK = (field: InputFormField): boolean => {
  const model = field.model;
  const required = field.require;
  if (required?.valueOf()) {
    return model !== undefined && model !== "";
  }
  return true;
};

enum InputType {
  text = "text",
  email = "email",
  phone = "tel",
}

const EMPTY_STRING = "";

const inputFields = reactive<Array<InputFormField>>([
  {
    model: EMPTY_STRING,
    require: true,
    name: "Your Name",
    type: InputType.text,
  },
  {
    model: EMPTY_STRING,
    require: false,
    name: "Your Company",
    type: InputType.text,
  },
  {
    model: EMPTY_STRING,
    require: true,
    name: "Your Business Mail",
    type: InputType.email,
  },
  {
    model: EMPTY_STRING,
    require: false,
    name: "Your Business Phone #",
    type: InputType.phone,
  },
]);

const textFields = reactive<FormField[]>([
  {
    model: EMPTY_STRING,
    name: "Your Comments",
  },
]);

export const sendEmail = async () => {
  const values = [
    ...inputFields.map((i) => i.model),
    ...textFields.map((i) => i.model),
  ];
  const contactForm = new ContactFormEmailJS(values);
  try {
    await contactForm.send();
  } catch (e) {
    console.log(e);
  }
};

const getIsSubmitable = (fields: InputFormField[]): boolean => {
  const values: Array<boolean> = fields.map((field: InputFormField) => {
    return isFieldOK(field);
  });
  return values.every((i) => i);
};

export const useContactForm = () => {
  return {
    inputFields,
    textFields,
    getIsSubmitable,
    sendEmail,
  };
};
