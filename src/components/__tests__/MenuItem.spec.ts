import MenuItem from "../menuTop/MenuItem.vue";
import { describe, it, expect } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
const menuItemFactory = (props?: Record<string, any>): VueWrapper => {
  return mount(MenuItem, {
    props: {
      ...props,
    },
  });
};

describe("Menu item", () => {
  it("The component exists", () => {
    expect(menuItemFactory({ text: "About me" })).toBeTruthy();
  });
  it("Test props", () => {
    const wrapper = menuItemFactory({ text: "About me" });
    const anchor = wrapper.find("li");
    expect(anchor.exists()).toBeTruthy();
    expect(anchor.text()).eq("About me");
  });
});
