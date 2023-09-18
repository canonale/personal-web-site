import { describe, expect, it, vi, type MockInstance } from "vitest";
import { VueCookieNext } from "vue-cookie-next";
import * as useCookies from "../useCookies";
import { nextTick } from "vue";

const VueCookieNextMock: MockInstance = vi.spyOn(
  VueCookieNext,
  "isCookieAvailable"
);

describe("Use cookies", () => {
  describe("On create", () => {
    it("cookie doesn't exist", () => {
      const { allowCookies } = useCookies.default();
      expect(allowCookies.value).toBeUndefined();
    });
    it("cookie exists", () => {
      VueCookieNextMock.mockReturnValueOnce(true);
      const { allowCookies } = useCookies.default();
      expect(VueCookieNextMock).toBeCalled();
      expect(allowCookies.value).not.toBe(undefined);
    });
  });
  describe("On change allow cookie.", () => {
    it.skip("Function setConsent was executed", async () => {
      const { allowCookies } = useCookies.default();
      const handleConsenSpy = vi.spyOn(useCookies, "handleConsent");
      allowCookies.value = true;
      await nextTick();
      expect(handleConsenSpy).toBeCalled();
    });
  });
  it("On click, allow cookies is true", () => {
    const { allowCookies, okClicked } = useCookies.default();
    okClicked();
    expect(allowCookies.value).toBeTruthy();
  });
});
