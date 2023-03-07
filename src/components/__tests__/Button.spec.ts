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
    const factory = (cta: boolean) => {
      return mount(Button, {
        props: {
          cta: cta,
        },
      });
    };
    let wrapper = factory(true);
    expect(wrapper.find("button").classes()).toContain("bg-indigo-500");
    wrapper = factory(false);
    expect(wrapper.find("button").classes()).toContain("bg-slate-700");
  });
});
