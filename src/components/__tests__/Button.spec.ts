import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ButtonCta from "../button/ButtonCta.vue";

const slotText = "Click me";

describe("Button component tests", () => {
  it("Button exists", () => {
    const wrapper = shallowMount(ButtonCta);
    expect(wrapper.exists()).toBeTruthy();
  });
  it("Check button slot", () => {
    const wrapper = shallowMount(ButtonCta, {
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
      return mount(ButtonCta, {
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
  it("Check button disabled prop", () => {
    const factory = (disabled: boolean) => {
      return mount(ButtonCta, {
        props: {
          cta: true,
          disabled: disabled,
        },
      });
    };
    let wrapper = factory(true);
    expect(wrapper.find("button").classes()).toContain("bg-indigo-300");
    wrapper = factory(false);
    expect(wrapper.find("button").classes()).toContain("bg-indigo-500");
  });
});
