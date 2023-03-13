import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import SalesCard from "../salesCard/SalesCard.vue";
import {
  FREE_TEXT,
  PRINCING_TEXT,
  FEATURED_TEXT,
  FEATURED_PRECENTAGE,
} from "../salesCard/SalesCardData";

const NAME = "PERSONAL";
const PRICE = 0;
const BULLETS = ["Limited projects", "Subject to availability"];
const FEATURED = false;
const featureCardFactory = (
  price: number = PRICE,
  featured: boolean = FEATURED
) =>
  shallowMount(SalesCard, {
    props: {
      name: NAME,
      bullets: BULLETS,
      price: price,
      featured: featured,
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
  it("Featured text", () => {
    const wrapper = featureCardFactory(PRICE, true);
    expect(wrapper.find(".featured").exists()).toBeTruthy();
    expect(wrapper.find(".featured").text()).toBe(
      `${FEATURED_TEXT}${FEATURED_PRECENTAGE}`
    );
  });
});
