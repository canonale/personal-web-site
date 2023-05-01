import MenuItem from "../menuTop/MenuItem.vue";
import { describe, it, expect } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
const menuItemFactory = (text: string): VueWrapper => {
  return mount(MenuItem, {
    props: {
      text: text,
    },
  });
};

describe("Menu item", () => {
  it("The component exists", () => {
    expect(menuItemFactory("About me")).toBeTruthy();
  });
  it("Test props", () => {
    const wrapper = menuItemFactory("About me");
    const anchor = wrapper.find("li");
    expect(anchor.exists()).toBeTruthy();
    expect(anchor.text()).eq("About me");
  });
});
