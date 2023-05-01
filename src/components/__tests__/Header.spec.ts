import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HeaderMain from "@/components/header/HeaderMain.vue";
import MenuTopVue from "@/components/menuTop/MenuTop.vue";
import CanonaleLogotype from "@/components/logotype/LogoType.vue";

describe("Menu Top", () => {
  it("The component exists", () => {
    const wrapper = mount(HeaderMain);
    expect(wrapper.exists()).toBe(true);
  });
  it("Menu exists", () => {
    const wrapper = mount(HeaderMain);
    expect(wrapper.findComponent(MenuTopVue).exists()).toBe(true);
  });
  it("Logo exists", () => {
    const wrapper = mount(HeaderMain);
    expect(wrapper.findComponent(CanonaleLogotype).exists()).toBe(true);
  });
});
