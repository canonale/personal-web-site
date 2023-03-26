import { describe, expect, it } from "vitest";
import type { FormField } from "@/components/forms/forms/contactForm.d";
import { isFieldOK, useContactForm } from "../contactForm";
import { reactive } from "vue";

const FIELD_NAME = "name";
const EMPTY_STRING = "";
describe("Contact form testing", () => {
  it("A field is required and empty", () => {
    const name = "";
    const field: FormField = {
      model: name,
      name: FIELD_NAME,
      require: true,
    };
    const isOk = isFieldOK(field);
    expect(isOk).toBeFalsy();
  });
  it("A field is required and filled", () => {
    const name = "It's my name";
    const field: FormField = {
      model: name,
      name: FIELD_NAME,
      require: true,
    };
    const isOk = isFieldOK(field);
    expect(isOk).toBeTruthy();
  });
  it("A field isn't required and filled", () => {
    const name = "It's my name";
    const field: FormField = {
      model: name,
      name: FIELD_NAME,
    };
    const isOk = isFieldOK(field);
    expect(isOk).toBeTruthy();
  });
  it("A field is required and empty", () => {
    const name = "";
    const field: FormField = {
      model: name,
      name: FIELD_NAME,
      require: true,
    };
    const isOk = isFieldOK(field);
    expect(isOk).toBeFalsy();
  });

  it("is Submitable", () => {
    const { getIsSubmitable } = useContactForm();
    const fields = reactive<Array<FormField>>([
      {
        model: EMPTY_STRING,
        require: true,
        name: "Your Name",
      },
      {
        model: EMPTY_STRING,
        require: false,
        name: "Your Company",
      },
    ]);
    expect(getIsSubmitable(fields)).toBeFalsy();
    fields.map((field) => {
      field.model = "Filled out";
    });
    expect(getIsSubmitable(fields)).toBeTruthy();
  });
});
