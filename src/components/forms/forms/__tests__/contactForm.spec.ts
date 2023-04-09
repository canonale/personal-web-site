import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ContactForm from "../ContactForm.vue";

const DUMMY_TEST = "hello@world.com";

describe("Contact form testing", () => {
  it("Form isn't submitable", async () => {
    const wrapper = mount(ContactForm);
    expect(wrapper.exists()).toBeTruthy();
    const button = wrapper.find("button");
    expect(button.attributes("disabled")).toBe("");
  });
  it("Form is submitable", async () => {
    const wrapper = mount(ContactForm);
    const inputs = wrapper.findAll("input.input");
    const button = wrapper.find("button");
    inputs.forEach(async (input) => {
      await input.setValue(DUMMY_TEST);
    });
    expect(button.attributes().disabled).toBe("");
    await button.trigger("click");
    //expect(contactMock).toBeCalled();
  });
});
