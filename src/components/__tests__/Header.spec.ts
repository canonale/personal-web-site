import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HeaderMain from "../header/HeaderMain.vue";
import MenuTopVue from "../menuTop/MenuTop.vue";
import Logotype from "../logotype/Logotype.vue";

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
    expect(wrapper.findComponent(Logotype).exists()).toBe(true);
  });
});
