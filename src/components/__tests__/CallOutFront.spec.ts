import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CallOutFront from "../callOutFront/CallOutFront.vue";
import CanonaleLogotype from "../callOutFront/CanonaleLogotype.vue";
import GradientTitle from "../callOutFront/GradientTitle.vue";
import ButtonLine from "../callOutFront/ButtonLine.vue";

describe("Menu Top", () => {
  it("The component exists", () => {
    const wrapper = mount(CallOutFront);
    expect(wrapper.exists()).toBe(true);
  });
  it("CanonaleLogotype exists", () => {
    const wrapper = mount(CallOutFront);
    expect(wrapper.findComponent(CanonaleLogotype).exists()).toBe(true);
  });
  it("Gradient title exists", () => {
    const slotText = "Canonale";
    const wrapper = mount(GradientTitle, {
      slots: {
        default: slotText,
      },
    });
    expect(wrapper.findComponent(GradientTitle).exists()).toBe(true);
    expect(wrapper.find("h1").text()).eq(slotText);
  });
  it("Button line component exists", () => {
    const wrapper = mount(CallOutFront);
    expect(wrapper.findComponent(ButtonLine).exists()).toBe(true);
  });
});
