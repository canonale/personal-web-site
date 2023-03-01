import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MenuTop from "../menuTop/MenuTop.vue";
import IconBars3BottomRight from "../icons/IconBars3BottomRight.vue";
import IconXMark from "../icons/IconXMark.vue";

describe("Menu Top", () => {
  it("The component exists", () => {
    const wrapper = mount(MenuTop);
    expect(wrapper.exists()).toBe(true);
  });

  it("Responsive button show hidden menu", async () => {
    const wrapper = mount(MenuTop);
    const menu = wrapper.find("menu");
    const buttonShowMenu = wrapper.find("button.show-menu");
    expect(menu.exists()).toBeFalsy();
    await buttonShowMenu.trigger("click");
    const menuShown = wrapper.find("menu");
    expect(menuShown.exists()).toBeTruthy();
  });
  it("Item number", async () => {
    const wrapper = mount(MenuTop);
    const menuItems: Array<String> = wrapper.vm.menuItems;
    await wrapper.find("button.show-menu").trigger("click");
    const menuItemsHTML = wrapper.findAll("menu > ul > li");
    expect(menuItems.length).toBe(menuItemsHTML.length);
  });
  it("Menu button changes when clicking on", async () => {
    const wrapper = mount(MenuTop);
    expect(wrapper.findComponent(IconBars3BottomRight).exists()).toBeTruthy();
    await wrapper.find("button.show-menu").trigger("click");
    expect(wrapper.findComponent(IconBars3BottomRight).exists()).toBeFalsy();
    expect(wrapper.findComponent(IconXMark).exists()).toBeTruthy();
  });
});
