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

  const goToRoute = () => {
    router.push({
      name: props.route,
      hash: props.hash,
    });
  };
  return {
    buttonType,
    goToRoute,
  };
};

export default useButtonCta;
