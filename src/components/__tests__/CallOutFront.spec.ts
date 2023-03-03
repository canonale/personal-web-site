import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CallOutFront from "../callOutFront/CallOutFront.vue";
import Logotype from "../callOutFront/Logotype.vue";

describe("Menu Top", () => {
  it("The component exists", () => {
    const wrapper = mount(CallOutFront);
    expect(wrapper.exists()).toBe(true);
  });
  it("Logotype exists", () => {
    const wrapper = mount(CallOutFront);
    expect(wrapper.findComponent(Logotype).exists()).toBe(true);
  });
});
