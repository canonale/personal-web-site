import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import LogoType from "@/components/logotype/LogoType.vue";
import IconLogo from "@/components/icons/IconLogo.vue";

describe("Menu Top", () => {
  it("The component exists", () => {
    const wrapper = mount(LogoType);
    expect(wrapper.exists()).toBe(true);
  });
  it("Logo Icon exists", () => {
    const wrapper = mount(LogoType);
    expect(wrapper.findComponent(IconLogo).exists()).toBe(true);
  });
});
