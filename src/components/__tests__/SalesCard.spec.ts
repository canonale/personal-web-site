import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import SalesCard from "../salesCard/SalesCard.vue";
import { FREE_TEXT, PRINCING_TEXT } from "../salesCard/SalesCardData";

const NAME = "PERSONAL";
const PRICE = 0;
const BULLETS = ["Limited projects", "Subject to availability"];
const FEATURED = false;
const featureCardFactory = (price: number = PRICE) =>
  shallowMount(SalesCard, {
    props: {
      name: NAME,
      bullets: BULLETS,
      price: price,
      featured: FEATURED,
    },
  });

describe("SalesCard component tests", () => {
  it("SalesCard exists", () => {
    const wrapper = featureCardFactory();
    expect(wrapper.exists()).toBeTruthy();
  });
  it("SalesCard free", () => {
    const wrapper = featureCardFactory();
    expect(wrapper.find(".name").text()).toBe(NAME);
    expect(wrapper.findAll("ul.bullets > li").length).toBe(BULLETS.length);
    expect(wrapper.find(".featured").exists()).toBe(FEATURED);
    expect(wrapper.find(".price").text()).toBe(FREE_TEXT);
  });
  it("SalesCard with price", () => {
    const ASTRONAUT_PRICE = 42;
    const wrapper = featureCardFactory(ASTRONAUT_PRICE);
    expect(wrapper.find(".price").text()).toBe(
      `${ASTRONAUT_PRICE}${PRINCING_TEXT}`
    );
  });
});
