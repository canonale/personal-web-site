import MenuItem from "../menuTop/MenuItem.vue";
import { describe, it, expect } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";

const menuItemFactory = (text: string, route?: string): VueWrapper => {
  return shallowMount(MenuItem, {
    props: {
      text: text,
      route: route,
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

describe("Menu item click", () => {
  it("On click emit event", async () => {
    const wrapper = menuItemFactory("About me");
    const div = wrapper.find("div");
    expect(div.exists()).toBeTruthy();
    await div.trigger("click");
    const emmit = wrapper.emitted();
    expect(emmit.clicked).toBeTruthy();
  });
});
