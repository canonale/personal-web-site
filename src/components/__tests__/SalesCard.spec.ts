import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import SalesCard from "../salesCard/SalesCard.vue";

const NAME = "PERSONAL";
const PRICE = 0;
const BULLETS = ["Limited projects", "Subject to availability"];
const featureCardFactory = () =>
  shallowMount(SalesCard, {
    props: {
      name: NAME,
      bullets: BULLETS,
      price: PRICE,
    },
  });

describe("SalesCard component tests", () => {
  it.only("SalesCard exists", () => {
    const wrapper = featureCardFactory();
    expect(wrapper.exists()).toBeTruthy();
  });
  it("Props are needed", () => {
    const wrapper = featureCardFactory();
    expect(wrapper.find(".name").text()).toBe(NAME);
    expect(wrapper.find(".bullets").text()).toBe(BULLETS);
    expect(wrapper.find(".price").text()).toBe(PRICE);
  });
});
