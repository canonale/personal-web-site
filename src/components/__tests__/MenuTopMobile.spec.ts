import { describe, it, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import MenuTop from "../menuTop/MenuTop.vue";
import SocialNetworks from "../menuTop/SocialNetworks.vue";
import { useMenuTop } from "../menuTop/menuTop";

describe("Menu Top", () => {
  it("The component exists", () => {
    const wrapper = mount(MenuTop);
    expect(wrapper.exists()).toBe(true);
  });

  it("Responsive button show hidden menu", async () => {
    const wrapper = mount(MenuTop);
    const menu = wrapper.find("menu");
    const buttonShowMenu = wrapper.find("button.show-menu");
    expect(menu.exists()).toBeTruthy();
    await buttonShowMenu.trigger("click");
    const menuShown = wrapper.find("menu");
    expect(menuShown.exists()).toBeTruthy();
  });
  it("Item number", async () => {
    const { menuItems } = useMenuTop();
    const wrapper = mount(MenuTop);
    await wrapper.find("button.show-menu").trigger("click");
    const menuItemsHTML = wrapper.findAll("menu > ul > li");
    expect(menuItems.length).toBe(menuItemsHTML.length);
  });
  it.skip("Menu button changes when clicking on", async () => {
    const wrapper = mount(MenuTop);
    await flushPromises();
    let toOpenIcon = wrapper.find('svg[data-test="IconBars3BottomRight"]');
    expect(toOpenIcon.exists()).toBeTruthy();
    await wrapper.find("button.show-menu").trigger("click");
    expect(wrapper.find('svg[data-test="IconXMark"]')).toBeTruthy();
    toOpenIcon = wrapper.find('svg[data-test="IconBars3BottomRight"]');
    await flushPromises();
    expect(toOpenIcon.exists()).toBeFalsy();
  });
  it("Social network icons exist", async () => {
    const { showMenu } = useMenuTop();
    const wrapper = mount(MenuTop);
    expect(wrapper.find("menu.mobile").exists()).toBeFalsy();
    await flushPromises();
    showMenu.value = true;
    await flushPromises();
    expect(
      wrapper.find("menu.mobile").findComponent(SocialNetworks).exists()
    ).toBeTruthy();
  });
});
