import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi, type Mock, type Mocked } from "vitest";
import ButtonCta, { type ButtonCtaProps } from "../button/ButtonCta.vue";
import * as useButtonCta from "@/components/button/buttonCta";
import RouteNames from "@/router/routeNames";

const slotText = "Click me";
const buttonTypeMock = "";
const goToRouteMock = vi.fn();

describe("Button component tests", () => {
  it("Button exists", () => {
    const wrapper = shallowMount(ButtonCta);
    expect(wrapper.exists()).toBeTruthy();
  });
  it("Check button slot", () => {
    const wrapper = shallowMount(ButtonCta, {
      slots: {
        default: slotText,
      },
    });
    const buttonHTML = wrapper.find("button");
    expect(buttonHTML.exists()).toBeTruthy();
    expect(buttonHTML.text()).toBe(slotText);
  });

  it("Check button props", () => {
    const factory = (cta: boolean) => {
      return mount(ButtonCta, {
        props: {
          cta: cta,
        },
      });
    };
    let wrapper = factory(true);
    expect(wrapper.find("button").classes()).toContain("bg-indigo-500");
    wrapper = factory(false);
    expect(wrapper.find("button").classes()).toContain("bg-slate-700");
  });
  it("Check button disabled prop", () => {
    const factory = (disabled: boolean) => {
      return mount(ButtonCta, {
        props: {
          cta: true,
          disabled: disabled,
        },
      });
    };
    let wrapper = factory(true);
    expect(wrapper.find("button").classes()).toContain("bg-indigo-300");
    wrapper = factory(false);
    expect(wrapper.find("button").classes()).toContain("bg-indigo-500");
  });
  it("Click on button", async () => {
    const props: ButtonCtaProps = {
      route: RouteNames.ABOUT_ME,
    };
    vi.spyOn(useButtonCta, "default" as never).mockReturnValue({
      buttonType: buttonTypeMock,
      goToRoute: goToRouteMock,
    });
    const wrapper = shallowMount(ButtonCta, {
      props: props,
      slots: {
        default: slotText,
      },
    });
    const button = wrapper.find("button");
    await button.trigger("click");

    expect(goToRouteMock).toHaveBeenCalledTimes(1);
  });
});
