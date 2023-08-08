import { describe, expect, it, vi } from "vitest";
import type { ButtonCtaProps } from "../ButtonCta.vue";
import useButtonCta from "../buttonCta";
import { router } from "@/router";
import RouteNames from "@/router/routeNames";

const routerPushMock = vi.spyOn(router, "push");

describe("buttonType button cta", () => {
  describe("Get Button type enabled", () => {
    it("Cta type", () => {
      const props: ButtonCtaProps = {
        cta: true,
        disabled: false,
        type: "button",
      };
      const { buttonType } = useButtonCta(props);
      expect(buttonType.value).toBe("bg-indigo-500 cta-type");
    });
    it("No Cta type", () => {
      const props: ButtonCtaProps = {
        cta: false,
        disabled: false,
        type: "button",
      };
      const { buttonType } = useButtonCta(props);
      expect(buttonType.value).toBe("bg-slate-700 no-cta-type");
    });
  });
  describe("Get Button type disabled", () => {
    it("Cta type", () => {
      const props: ButtonCtaProps = {
        cta: true,
        disabled: true,
        type: "button",
      };
      const { buttonType } = useButtonCta(props);
      expect(buttonType.value).toBe("bg-indigo-300 cta-type");
    });
    it("No Cta type", () => {
      const props: ButtonCtaProps = {
        cta: false,
        disabled: true,
        type: "button",
      };
      const { buttonType } = useButtonCta(props);
      expect(buttonType.value).toBe("bg-slate-400 no-cta-type");
    });
  });
});

describe("goToRoute push route", () => {
  it("goToRoute call push", () => {
    const props: ButtonCtaProps = {
      route: RouteNames.ABOUT,
    };
    const { goToRoute } = useButtonCta(props);
    goToRoute();
    expect(routerPushMock).toBeCalledWith({ name: props.route });
  });
});
