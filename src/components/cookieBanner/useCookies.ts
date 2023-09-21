import { ref, watch, computed } from "vue";
import { VueCookieNext } from "vue-cookie-next";
import { useState } from "vue-gtag-next";

const allowCookies = ref<boolean>();

const COOKIE_MONTHS_AVAILABLE = 3;
const COOKIE_NAME = "cookies_consent";

const getCookieDate = (): Date => {
  const today = new Date();
  today.setMonth(today.getMonth() + COOKIE_MONTHS_AVAILABLE);
  return today;
};

export const handleConsent = (value?: boolean): void => {
  if (value != undefined) {
    VueCookieNext.setCookie(COOKIE_NAME, value.toString(), {
      expire: getCookieDate(),
    });
    if (!value) {
      console.log("gtag.disable()");
    }
  }
};

export default function useCookies() {
  const { isEnabled } = useState();
  if (VueCookieNext.isCookieAvailable(COOKIE_NAME)) {
    allowCookies.value = VueCookieNext.getCookie(COOKIE_NAME) === "true";
    if (isEnabled) {
      isEnabled.value = allowCookies.value;
    }
  }

  watch(allowCookies, () => {
    handleConsent(allowCookies.value);
  });

  const showBanner = computed(() => {
    return allowCookies.value === undefined;
  });

  const okClicked = () => {
    allowCookies.value = true;
    if (isEnabled) {
      isEnabled.value = true;
    }
  };

  return {
    allowCookies,
    showBanner,
    okClicked,
  };
}
