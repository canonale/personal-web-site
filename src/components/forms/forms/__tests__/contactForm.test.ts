import { describe, expect, it, vi } from "vitest";
import type { InputFormField } from "@/components/forms/forms/contactForm.d";
import { isFieldOK, useContactForm, sendEmail } from "../contactForm";
import { reactive } from "vue";
import { ContactFormEmailJS } from "@/communications/ContactFormREST";

const FIELD_NAME = "name";
const EMPTY_STRING = "";

const contactFormEmailJSMockSpy = vi.spyOn(
  ContactFormEmailJS.prototype,
  "send"
);
describe("Contact form testing", () => {
  it("A field is required and empty", () => {
    const name = "";
    const field: InputFormField = {
      model: name,
      name: FIELD_NAME,
      require: true,
    };
    const isOk = isFieldOK(field);
    expect(isOk).toBeFalsy();
  });
  it("A field is required and filled", () => {
    const name = "It's my name";
    const field: InputFormField = {
      model: name,
      name: FIELD_NAME,
      require: true,
    };
    const isOk = isFieldOK(field);
    expect(isOk).toBeTruthy();
  });
  it("A field isn't required and filled", () => {
    const name = "It's my name";
    const field: InputFormField = {
      model: name,
      name: FIELD_NAME,
    };
    const isOk = isFieldOK(field);
    expect(isOk).toBeTruthy();
  });
  it("A field is required and empty", () => {
    const name = "";
    const field: InputFormField = {
      model: name,
      name: FIELD_NAME,
      require: true,
    };
    const isOk = isFieldOK(field);
    expect(isOk).toBeFalsy();
  });

  it("is Submitable", () => {
    const { getIsSubmitable } = useContactForm();
    const fields = reactive<Array<InputFormField>>([
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
    fields.forEach((field) => {
      field.model = "Filled out";
    });
    expect(getIsSubmitable(fields)).toBeTruthy();
  });
});

describe("Send the Mail once submit", () => {
  it("The mail was sent", () => {
    sendEmail();
    expect(contactFormEmailJSMockSpy).toBeCalled();
  });
  it("The mail sent failured", () => {
    const error = "Error";
    sendEmail();
    contactFormEmailJSMockSpy.mockRejectedValue(error);
    expect(sendEmail).rejects.toThrow(error);
  });
});
