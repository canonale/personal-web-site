import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Button from "../button/Button.vue";

const slotText = "Click me";

describe("Button component tests", () => {
  it("Button exists", () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.exists()).toBeTruthy();
  });
  it("Check button slot", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: slotText,
      },
    });
    const buttonHTML = wrapper.find("button");
    expect(buttonHTML.exists()).toBeTruthy();
    expect(buttonHTML.text()).toBe(slotText);
  });

  it("Check button props", () => {
    const wrapper = mount(Button, {
      props: {
        cta: true,
      },
    });
    const buttonHTML = wrapper.find("button");
    expect(buttonHTML.classes()).toContain("bg-indigo-500");
  });
});
