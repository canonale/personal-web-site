import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CanonaleLogotype from "../logotype/CanonaleLogotype.vue";
import IconLogo from "../icons/IconLogo.vue";

describe("Menu Top", () => {
  it("The component exists", () => {
    const wrapper = mount(CanonaleLogotype);
    expect(wrapper.exists()).toBe(true);
  });
  it("Logo Icon exists", () => {
    const wrapper = mount(CanonaleLogotype);
    expect(wrapper.findComponent(IconLogo).exists()).toBe(true);
  });
});
