import { router } from "@/router";
import { computed } from "vue";
import type { ButtonCtaProps } from "./ButtonCta.vue";

const useButtonCta = (props: ButtonCtaProps) => {
  const buttonType = computed((): string => {
    const type = props.cta ?? false;
    const isDisabled = props.disabled ?? false;
    const ctaClasses = `bg-indigo-${isDisabled ? "300" : "500"} cta-type`;
    const noCtaClasses = `bg-slate-${isDisabled ? "400" : "700"} no-cta-type`;
    return type ? ctaClasses : noCtaClasses;
  });

  const buttonSize = computed((): string => {
    return props.size == "normal" ? "px-5 leading-10" : "px-2 leading-6";
  });

  const goToRoute = () => {
    router.push({
      name: props.route,
      hash: props.hash,
    });
  };
  return {
    buttonType,
    buttonSize,
    goToRoute,
  };
};

export default useButtonCta;
