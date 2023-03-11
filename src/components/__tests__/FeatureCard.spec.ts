import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FeatureCard from "../featureCard/FeatureCard.vue";

const TITLE = "Title";
const SUB_TITLE = "Sub title";
const EMOJI = "💡";
const featureCardFactory = () =>
  shallowMount(FeatureCard, {
    props: {
      title: TITLE,
      emoji: EMOJI,
      subTitle: SUB_TITLE,
    },
  });

describe("FeatureCard component tests", () => {
  it("FeatureCard exists", () => {
    const wrapper = featureCardFactory();
    expect(wrapper.exists()).toBeTruthy();
  });
  it("Props are needed", () => {
    const wrapper = featureCardFactory();
    expect(wrapper.find(".title").text()).toBe(TITLE);
    expect(wrapper.find(".emoji").text()).toBe(EMOJI);
    expect(wrapper.find(".subTitle").text()).toBe(SUB_TITLE);
  });
});
