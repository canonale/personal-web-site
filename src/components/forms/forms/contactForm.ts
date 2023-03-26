import { reactive } from "vue";
import type { FormField } from "./contactForm.d";

export const isFieldOK = (field: FormField): boolean => {
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

const fields = reactive<Array<FormField>>([
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

const getIsSubmitable = (fields: FormField[]): boolean => {
  const values: Array<boolean> = fields.map((field: FormField) => {
    return isFieldOK(field);
  });
  return values.every((i) => i);
};

export const useContactForm = () => {
  return {
    fields,
    getIsSubmitable,
  };
};
