import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Logotype from "../logotype/Logotype.vue";
import IconLogo from "../icons/IconLogo.vue";

describe("Menu Top", () => {
  it("The component exists", () => {
    const wrapper = mount(Logotype);
    expect(wrapper.exists()).toBe(true);
  });
  it("Logo Icon exists", () => {
    const wrapper = mount(Logotype);
    expect(wrapper.findComponent(IconLogo).exists()).toBe(true);
  });
});
