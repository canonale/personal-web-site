import { router } from "@/router";
import { computed } from "vue";
import type { ButtonCtaProps } from "./ButtonCta.vue";

const useButtonCta = (props: ButtonCtaProps) => {
  const buttonType = computed((): string => {
    const type = props.cta ?? false;
    const isDisabled = props.disabled ?? false;
    const indigoClasses = `bg-indigo-${
      isDisabled ? "300" : "500"
    } hover:bg-indigo-400 border-indigo-400`;
    const slateClasses = `bg-slate-${
      isDisabled ? "400" : "700"
    } hover:bg-slate-600 border-slate-600`;
    return type ? indigoClasses : slateClasses;
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
